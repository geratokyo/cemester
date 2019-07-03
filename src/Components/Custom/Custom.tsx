import * as React from 'react';
import { iCmsItem, iCmsProps } from '../../models';
import CustomComponentService from '../../CustomComponentService';


export interface CustomProps extends iCmsProps {
    className?: string;
    item: iCmsItem;
}


export const Custom: React.SFC<CustomProps> = (props) => {
    let { item } = props;
    let cls = props.className || "";
    return (
        <>
            {props.cmsOptions.isInView && CustomComponentService.getCustomComponent(props.item)}
        </>
    )
}
