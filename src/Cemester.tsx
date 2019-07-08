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

    whichBrowser = () => {
        var wBrowser, sUsrAg = navigator.userAgent;
        // The order matters here, and this may report false positives for unlisted browsers.
        if (sUsrAg.indexOf("Firefox") > -1) {
            wBrowser = "moz";
            // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
        } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
            wBrowser = "opr";
            //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
        } else if (sUsrAg.indexOf("Trident") > -1) {
            wBrowser = "ie";
            // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
        } else if (sUsrAg.indexOf("Edge") > -1) {
            wBrowser = "ed";
            // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
        } else if (sUsrAg.indexOf("Chrome") > -1) {
            wBrowser = "chr";
            // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
        } else if (sUsrAg.indexOf("Safari") > -1) {
            wBrowser = "saf";
            // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
        } else {
            wBrowser = "unk";
        }
        console.log('wBrowser', wBrowser);
        return wBrowser;
    }

    render(){
        let { props, state} = this; 
        let C = Components[props.content[0].type]; 
        return <C
            ref={e => this.el = e}
            {...props}
            content={props.content[0].children}
            className={this.whichBrowser()}
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
