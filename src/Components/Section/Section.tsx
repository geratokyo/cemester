import * as React from 'react';
import { iCmsItem, iCmsProps, DEFAULTS } from '../../models';
import { Content } from '../../Content';
import ScrollAnimation from '../../ScrollAnimation';
import ScrollAnimationHocHOC from '../../ScrollAnimationHOC';
// import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";


export interface SectionProps extends iCmsProps {
    className?: string;
    offset?: number;
    item: iCmsItem;
    screenThreshold?: number;
}

export interface SectionState {
    isInView: boolean;
    isAnimated: boolean;
}

// const SCREEN_THRESHOLD = 0.85;
export class Section extends React.Component<SectionProps, SectionState>{
    el: HTMLElement;
    constructor(p) {
        super(p);
        this.state = {
            isInView: false,
            isAnimated: false
        }
    }

    public static defaultProps: Partial<SectionProps> = {
        screenThreshold: DEFAULTS.SCREEN_THRESHOLD
    }

    shouldShowChildren = () => {
        return this.props.item.children && this.props.item.children.length;
    }

    getHtmlElement = () => {
        return this.el;
    }

    render() {
        let { props, state } = this;
        let {item} = props; 
        let itemClass = item.attributes && item.attributes.className || "";

        return (
            <section ref={e => this.el = e} className={`${itemClass}`}>
                {
                    this.shouldShowChildren() &&
                    item.children.map((e) => <Content
                        key={e.key}
                        offset={props.offset}
                        cmsOptions={{ ...props, isInView: state.isAnimated || state.isInView }}
                        item={e} />)
                }
            </section>
        )
    }
}


export default ScrollAnimationHocHOC(Section);

