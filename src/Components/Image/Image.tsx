import * as React from 'react'; 
import { iCmsItem, iImage, iCmsProps } from '../../models';
import ScrollAnimationHocHOC from '../../ScrollAnimationHOC';


export interface ImageProps extends iCmsProps{
    className?:string;
    item: iCmsItem;
}


export const Image: React.SFC<ImageProps> = (props)=>{
    let resUrl = (window as any).__RES_URL__; 
    let {item} = props; 
    let content:iImage = item.content; 
    let cls = props.className || "";

    return (
        <img className={`${cls} ${item.attributes && item.attributes.className}`} src={`${resUrl}${content.imgSrc}`} alt={content.altText || ""}
            style={props.style}
        />
    )
}



export default ScrollAnimationHocHOC(Image);