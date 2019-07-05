import * as React from 'react'; 
import { iCmsItem, iCmsProps } from '../../models';
import ScrollAnimationHocHOC from '../../ScrollAnimationHOC';


export interface TextProps extends iCmsProps{
    className?:string;
    item:iCmsItem; 
}


export const Text: React.SFC<TextProps> = (props)=>{
    let { item } = props;
    let cls = props.className || "";
    let clsA = item.attributes && item.attributes.className || "";
    return (
        <div className={`text ${cls} ${clsA}`}
            dangerouslySetInnerHTML={{__html:item.content}}
        >
        </div>
    )
}


export default ScrollAnimationHocHOC(Text);