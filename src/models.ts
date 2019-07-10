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

    style?:React.CSSProperties; 
}

export interface iCmsComponentOptions{
    /**
     * True if the element is in the viewport of the browser
     */

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
    content?:any|iImage; 
  
    /**
     * Child elements of the current node
     */
    children?:iCmsItem[]; 

    attributes?:iCmsAttributes; 
}


export interface iCmsAttributes extends iScrollAnimation{
    /**
     * the className that should be given to the current node's HTML tag
     */
    className?:string; 
}


/**
 * As take from the repo 
 * https://github.com/dbramwell/react-animate-on-scroll
 */
export interface iScrollAnimation{
    /**
     * The "viewport" is by default 150 pixels from the top and bottom of the screen. When part of an element is within the "viewport", animateIn is triggered. When no part of the element is in the "viewport", animateOut is triggered. This size of the "viewport" can be overridden by setting the offset property.
     */
    offset?:number;

    /**
     * Any css animation defined against a class, be it from animate.css or an animation that you have created yourself. The Animation triggers when the element enters the "viewport" (see offset property for more details on this).
     */
    animateIn?:string; 

    /**
     * Any css animation defined against a class, be it from animate.css or an animation that you have created yourself. The Animation triggers when the element is leaving the "viewport" (see offset property for more details on this).
     */
    animateOut?:string; 

    /**
     * Animation duration in seconds.
     */
    duration?:number; 

    /**
     * Whether the element should be visible to begin with or not.
     */
    initiallyVisible?:boolean; 

    /**
     * How long to delay the animation for (in milliseconds) once it enters or leaves the view.
     */
    delay?:number; 

    /**
     * Whether the element should only animate once or not.
     */
    animateOnce?:boolean; 

    /**
     * A style object can be assigned to any ScrollAnimation component and will be passed to the rendered dom element. Its probably best to avoid manually setting animationDuration or opacity as the component will modify those attributes.
     */
    style?: React.CSSProperties;

    /**
     * By default the code checks to see if the element is visible within the window. This can be changed to any other parent element of the ScrollAnimation by adding a css selector pointing to the parent that you wish to use.
     */
    scrollableParentSelector?:string; 

    /**
     * By default if a ScrollAnimation is in view as soon as a page loads, then the animation will begin. If you don't want the animation to being until the user scrolls, then set this to false.
     */
    animatePreScroll?:boolean; 

    /**
     * Callback function to run once the animateIn animation has completed. Receives the visibility of the element at time of execution.
     */
    afterAnimatedIn?:(e:HTMLElement)=>void;

    /**
     * Callback function to run once the animateOut animation has completed. Receives the visibility of the element at time of execution. 
     */
    afterAnimatedOut?:(e:HTMLElement)=>void;
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


export const DEFAULTS = { 
    SCREEN_THRESHOLD:0.85
}


export interface iPageProps{
    /**
     * Classname of the parent element
     */
    className?:string; 

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