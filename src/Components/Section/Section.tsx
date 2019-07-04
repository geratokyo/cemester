import * as React from 'react';
import { iCmsItem, iCmsProps, DEFAULTS } from '../../models';
import { Content } from '../../Content';
import  ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor"; 


export interface SectionProps extends iCmsProps {
    className?: string;
    offset?: number;
    item: iCmsItem;
    screenThreshold?:number; 
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

    public static defaultProps:Partial<SectionProps> = {
        screenThreshold:DEFAULTS.SCREEN_THRESHOLD
    }

    componentDidMount(){
        configureAnchors({})
        this.setState({
            isInView: this.isInView()
        })
    }

    componentDidUpdate(prevProps: SectionProps, prevState: SectionState) {
        let isVisible = this.isInView();

        if (prevProps.offset !== this.props.offset) {
            this.setState({
                isInView: isVisible
            })
        }
        if (!prevState.isInView && this.state.isInView) {
            this.setState({
                isAnimated: true
            })
        }
    }

    shouldComponentUpdate(nextProps:SectionProps, nextState:SectionState){
        if(nextState.isAnimated){
            return false;
        }
        return true;
    }

    isInView = () => {
        let cc = this.el.getBoundingClientRect();
        let heightSplit = window.innerHeight * this.props.screenThreshold;
        return cc.top >= 0 && cc.top < heightSplit
    }

    shouldShowChildren = () => {
        return this.props.item.children && this.props.item.children.length;
    }

    getHtmlElement = ()=>{
        return this.el;
    }

    render() {
        let { props, state } = this;
        let itemClass = props.item.className || "";
        console.log("hehehe", ScrollableAnchor);
        return (
            
            <section ref={e => this.el = e} className={`${itemClass}`}>
                <ScrollableAnchor key={props.item.key} id={props.item.key}>
                {
                    this.shouldShowChildren() &&
                    props.item.children.map((e) => <Content
                        key={e.key}
                        offset={props.offset}
                        cmsOptions={{ ...props, isInView: state.isAnimated || state.isInView }}
                        item={e} />)
                }
                </ScrollableAnchor>
            </section>
        )
    }
}


