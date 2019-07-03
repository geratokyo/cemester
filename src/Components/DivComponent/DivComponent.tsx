import * as React from 'react';
import { iCmsItem, iCmsProps } from '../../models';
import { Content } from '../../Content';


export interface DivComponentProps extends iCmsProps{
    className?: string;
    item: iCmsItem;
}


export const DivComponent: React.SFC<DivComponentProps> = (props) => {
    let { item } = props;
    let cls = props.className || "";
    return (
        <div id={item.key} className={`component--${item.key} ${item.className} ${cls}`}>
            {
                (props.item.children && props.item.children.length) &&
                props.item.children.map((e) => <Content 
                    key={e.key} 
                    item={e} 
                    cmsOptions={props.cmsOptions}
                />)
            }
        </div>
    )
}