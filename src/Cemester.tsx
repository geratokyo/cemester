import * as React from 'react'; 
import { iCmsItem, DEFAULTS, iCemesterProps } from './models';
import * as Components from './Components';
import CustomComponentService from './CustomComponentService';


export interface CemesterProps extends iCemesterProps{ 
}


export interface CemesterState{ 

}

export class Cemester extends React.Component<CemesterProps, CemesterState>{
    constructor(p:CemesterProps){
        super(p); 
        CustomComponentService.setCustomComponentFn(p.customComponents); 
    }

    public static defaultProps:Partial<CemesterProps> ={ 
        screenThreshold:DEFAULTS.SCREEN_THRESHOLD
    }

    render(){
        let { props, state} = this; 
        let C = Components[props.content[0].type]; 
        return <C
            {...props}
            content={props.content[0].children}
        />
    }
}

