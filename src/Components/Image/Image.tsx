import * as React from 'react'; 
import { iCmsItem, iImage, iCmsProps } from '../../models';


export interface ImageProps extends iCmsProps{
    className?:string;
    item: iCmsItem;
}


export const Image: React.SFC<ImageProps> = (props)=>{
    let resUrl = (window as any).__RES_URL__; 
    let {item} = props; 
    let content:iImage = item.content; 
    let cls = props.className || "";

    let animate = (props.cmsOptions.isInView && item.animation) ? item.animation :(!item.animation)?"":"opacify"
    return (
        <img className={`${cls} ${item.className} ${animate}`} src={`${resUrl}${content.imgSrc}`} alt={content.altText || ""}/>
    )
}