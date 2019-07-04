import * as React from 'react'; 
import { iCmsItem, DEFAULTS, iPageProps } from './models';
import * as Components from './Components';
import CustomComponentService from './CustomComponentService';
import { SinglePage } from './Components/SinglePage/SinglePage';
import { SingleSectionPage } from './Components/SingleSectionPage/SingleSectionPage';


export interface CemesterProps extends iPageProps{ 
}


export interface CemesterState{ 

}

export class Cemester extends React.Component<CemesterProps, CemesterState>{
    el:SinglePage|SingleSectionPage; 
    constructor(p:CemesterProps){
        super(p); 
        CustomComponentService.setCustomComponentFn(p.customComponents); 
    }

    public static defaultProps:Partial<CemesterProps> ={ 
        screenThreshold:DEFAULTS.SCREEN_THRESHOLD
    }

    getElement = ()=>{
        return this.el; 
    }

    render(){
        let { props, state} = this; 
        let C = Components[props.content[0].type]; 
        return <C
            ref={e => this.el = e}
            {...props}
            content={props.content[0].children}
        />
    }
}




export const keyBy = (e:any[], k:string)=>{
    let s = {}
    e.forEach((i)=>{
        s[i[k]]=i;
    })
    return s; 
}
