import * as React from 'react';
import { iCmsItem, iCmsProps } from '../../models';
import { Content } from '../../Content';


export interface ContainerProps extends iCmsProps{
    className?: string;
    item: iCmsItem;
}


export const Container: React.SFC<ContainerProps> = (props) => {

    let cls = props.className || "";
    let itemCls = props.item.className || "container";
    return (
        <div className={`${itemCls} ${cls}`}>
            <div className="row">
                {
                    (props.item.children && props.item.children.length) &&
                    props.item.children.map((e) => <Content 
                        key={e.key} 
                        cmsOptions={props.cmsOptions}
                        item={e} />)
                }
            </div>
        </div>
    )
}