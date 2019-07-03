import * as React from 'react'; 
import { iCmsItem } from './models';


class CustomComponentService { 
    customComponent:(item:iCmsItem)=>React.ReactNode; 
    constructor(){

    }

    getCustomComponent = (item:iCmsItem) =>{
        return this.customComponent(item); 
    }
    
    getCustomComponentFn = ()=>this.customComponent; 

    setCustomComponentFn = (cb:(item:iCmsItem)=>React.ReactNode)=>{
        this.customComponent = cb; 
    }
}



export default new CustomComponentService(); 