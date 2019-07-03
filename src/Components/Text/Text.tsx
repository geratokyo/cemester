import * as React from 'react'; 
import { iCmsItem, iCmsProps } from '../../models';


export interface TextProps extends iCmsProps{
    className?:string;
    item:iCmsItem; 
}


export const Text: React.SFC<TextProps> = (props)=>{
    let { item } = props;
    let cls = props.className || "";
    let clsA = item.className || "";
    let animate = props.cmsOptions.isInView ? item.animation :"opacify";
    if(!item.animation){
        animate = ""
    }
    return (
        <div className={`text ${cls} ${clsA} ${animate}`}
            dangerouslySetInnerHTML={{__html:item.content}}
        >
            
        </div>
    )
}

