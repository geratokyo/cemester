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
    return C ? <C {...props}/> :<pre>{JSON.stringify(item)}</pre>
}