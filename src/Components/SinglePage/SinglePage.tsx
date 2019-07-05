import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { iCmsItem, iPageProps, Dictionary } from '../../models';
import Section, {Section as ClassSection} from '../Section/Section';

export interface SinglePageProps extends iPageProps {
    className?: string;
}

export interface SinglePageState {
    isNavFixed: boolean;
    offset: number;
}

export class SinglePage extends React.Component<SinglePageProps, SinglePageState>{
    topEl: HTMLElement;
    el: HTMLDivElement;
    elements: Dictionary<ClassSection|any> = {};
    scrollEl: Scrollbars;
    windowHeight: number;
    constructor(p: SinglePageProps) {
        super(p);
        this.state = {
            isNavFixed: false,
            offset: 0
        }
    }

    componentDidMount() {
        setTimeout(() => {
            let url = GET_URL(this.props.url);

            if (url !== "" && this.elements[url]) {
                this.scrollToSection(url)
            }
        }, 1400)
        this.windowHeight = window.innerHeight;

    }

    scrollToSection = (sectionKey: string) => {
        this.scroll(this.elements[sectionKey].getHtmlElement());
    }

    scroll = (ref: HTMLElement) => {
        let offset = this.getOffset(ref).top
        this.scrollEl.scrollTop(offset)
    }

    getOffset = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        return {
            top: rect.top + this.scrollEl.getScrollTop()
        };
    }


    checkTopNavBar = () => {
        let topElOffset = Math.abs(this.topEl.getBoundingClientRect().top);
        this.setState({
            isNavFixed: topElOffset > (this.windowHeight * 0.5)
        })

    }

    render() {
        let { props, state } = this,
            cls = this.props.className || "";
        return (
            <div className={"sp " + cls} ref={e => this.el = e}>
                {
                    (state.isNavFixed && props.header) &&
                    <div className="sp__nav sp__nav--static"
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "auto",
                            zIndex: 9999
                        }}
                    >
                        {

                            React.Children.map(this.props.header, (child: React.ReactElement<any>) => {
                                return React.cloneElement(child, {
                                    ...child.props,
                                    scrollTo: this.scrollToSection
                                })
                            })[0]
                        }
                    </div>
                }
                {
                    (!state.isNavFixed && props.header) &&
                    <div className="sp__nav">
                        {
                            React.Children.map(this.props.header, (child: React.ReactElement<any>) => {
                                return React.cloneElement(child, {
                                    ...child.props,
                                    scrollTo: this.scrollToSection
                                })
                            })[0]
                        }
                    </div>
                }
                <div className="sp__content"
                    ref={e => this.topEl = e}>
                    {
                        props.content.map((e: iCmsItem) => <Section
                            ref={ee => { this.elements[e.key] = ee }}
                            key={e.key}
                            offset={state.offset}
                            item={e}
                            screenThreshold={this.props.screenThreshold}
                        />)
                    }
                </div>
            </div>
        )
    }
}


export const GET_URL = (url: string | (() => string)) => {
    if (typeof url === "string") {
        return url;
    } else if (typeof url === "function") {
        return url();
    }
} 