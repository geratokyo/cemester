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
    const C = Components[item.type];
    const K =  CustomComponentService.getCustomComponent(item); 
    if(!C && !K){
        console.error(`cemester => Component with name "${item.type}" was not found, check your type names in the customComponents prop function`)
        return null;
    }
    return <> 
    {
        C ? <C {...props}/> : K
    }
    </>
}