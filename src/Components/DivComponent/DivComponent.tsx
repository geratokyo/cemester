import * as React from 'react';
import { iCmsItem, iCmsProps } from '../../models';
import { Content } from '../../Content';
import ScrollAnimationHocHOC from '../../ScrollAnimationHOC';


export interface DivComponentProps extends iCmsProps{
    className?: string;
    item: iCmsItem;
}


export const DivComponent: React.SFC<DivComponentProps> = (props) => {
    let { item } = props;
    let itemCls = props.className ? props.className :((item.attributes && item.attributes.className) ? item.attributes.className:""); 
    return (
        <div id={item.key} className={`component--${item.key} ${itemCls}`}
            style={props.style}
        >
            {
                (props.item.children && props.item.children.length) &&
                props.item.children.map((e) => <Content 
                    key={e.key} 
                    item={e} 
                />)
            }
        </div>
    )
}



export default ScrollAnimationHocHOC(DivComponent);