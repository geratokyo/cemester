export interface iKeyLabel{
    key:string; 
    label:string; 
}

export interface Dictionary<T>{
	[idx:string]:T;
}

/**
 * This is the base props interface for all the props 
 * of the other elements to extend
 */
export interface iCmsProps{
    cmsOptions?:iCmsComponentOptions;
}

export interface iCmsComponentOptions{
    /**
     * True if the element is in the viewport of the browser
     */
    isInView?:boolean; 
}


/**
 * The interface that the JSON with the tree structure should follow
 */
export interface iCmsItem{
    /**
     * distict element identifier
     */
    key:string; 
    
    /**
     * type of the component that should be rendered for the node
     */
    type:string; 

    /**
     * distict element identifier of the parent element
     */
    parent?:string; 

    /**
     * the content of the current node to be rendered in a component
     */
    content?:any|iImage|iCustomContent; 
    
    /**
     * the className that should be given to the current node's HTML tag
     */
    className?:string; 

    /**
     * the className for the animations to be added on a current HTML tag
     */
    animation?:string; 

    /**
     * Child elements of the current node
     */
    children?:iCmsItem[]; 
}


export interface iImage{
    /**
     * Image alt text
     */
    altText?:string; 

    /**
     * Image source url
     */
    imgSrc:string; 
}

export interface iCustomContent{
    /**
     * type of the custom component to be rendered
     */
    type:string; 

    /**
     * this is the data or the props to be passed to
     * the custom component
     */
    data:any; 
}

export const DEFAULTS = { 
    SCREEN_THRESHOLD:0.85
}


export interface iPageProps{
    /**
     * Classname of the parent element
     */
    className?:string; 

    /**
     * This is the component that will appear at the top before the content
     * Also used for a SinglePage type to control the fixed elements
     */
    header?: React.ReactNode; 

    /**
     * This is a tree structure of the content of the page
     */
    content: iCmsItem[];

    /**
     * This represents the current url
     */
    url: string | (()=>string); 

    /**
     * A callback function that should be passed to determine 
     * the custom components of the campaign
     */
    customComponents:(item:iCmsItem)=>React.ReactNode; 

    /**
     * This is the percentage after which a section is 
     * going to be considered in view
     */
    screenThreshold?:number; 

}