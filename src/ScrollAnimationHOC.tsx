import * as React from 'react'; 
import ScrollAnimation from './ScrollAnimation' ;
import { iCmsItem, iCmsAttributes } from './models';


export interface ScrollAnimationHOCProps{

}

export const ScrollAnimationHOC= <P extends Object>(WrappedComponent:React.ComponentType<P>)=>{
    return class ScrollAnimationHOC extends React.Component<P, any>{
        render(){
            let {...props} = this.props as P;
            let attr:iCmsAttributes = (this.props as any).item.attributes;

            if(!attr || ((attr.animateIn == "" || !attr.animateIn) && (attr.animateOut == "" || !attr.animateOut))){
                return <WrappedComponent {...props} />
            }
            return (
                <ScrollAnimation {...attr} key={"sa-" + (this.props as any).item.key}>
                    <WrappedComponent {...props} />
                </ScrollAnimation>
            )
        }
    }
}

export default ScrollAnimationHOC; 