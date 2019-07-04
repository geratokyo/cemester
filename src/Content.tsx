import * as React from 'react';
import { iCmsItem, iCmsProps } from './models';
import * as Components from './Components';
import CustomComponentService from './CustomComponentService';



export interface ContentProps extends iCmsProps {
    item: iCmsItem;
    offset?: number;
}

export interface ContentState {

}

export const Content: React.SFC<ContentProps> = (props) => {
    let { item } = props;
    const C = Components[item.type] || CustomComponentService.getCustomComponent(item);
    if(!C){
        console.error(`Component with name "${item.type}" was not found \n Check your type names`)
        return null;
    }
    return <C {...props}/> 
}