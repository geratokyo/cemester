import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { iCmsItem, iPageProps, Dictionary } from '../../models';
import Section, {Section as ClassSection} from '../Section/Section';

export interface SinglePageProps extends iPageProps {
    className?: string;
}

export interface SinglePageState {
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
        }
    }

    render() {
        let { props, state } = this,
            cls = this.props.className || "";
        return (
            <div className={"sp " + cls} ref={e => this.el = e}>
                <div className="sp__content"
                    ref={e => this.topEl = e}>
                    {
                        props.content.map((e: iCmsItem) => <Section
                            ref={ee => { this.elements[e.key] = ee }}
                            key={e.key}
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