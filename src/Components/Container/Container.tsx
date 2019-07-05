import * as React from 'react';
import { iCmsItem, iCmsProps } from '../../models';
import { Content } from '../../Content';
import ScrollAnimationHocHOC from '../../ScrollAnimationHOC';


export interface ContainerProps extends iCmsProps{
    className?: string;
    item: iCmsItem;
}


export const Container: React.SFC<ContainerProps> = (props) => {
    let {item} = props;
    let cls = props.className || "";
    let itemCls = item.attributes && item.attributes.className || "container";
    return (
        <div className={`${itemCls} ${cls}`}>
            <div className="row">
                {
                    (item.children && item.children.length) &&
                    item.children.map((e) => <Content 
                        key={e.key} 
                        cmsOptions={props.cmsOptions}
                        item={e} />)
                }
            </div>
        </div>
    )
}

export default ScrollAnimationHocHOC(Container);