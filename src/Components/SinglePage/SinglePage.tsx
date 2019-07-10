import * as React from 'react';
import { iCmsItem, iPageProps, Dictionary } from '../../models';
import Section from '../Section/Section';

export interface SinglePageProps extends iPageProps {
    className?: string;
}

export interface SinglePageState {
}

export class SinglePage extends React.Component<SinglePageProps, SinglePageState>{
    el: HTMLDivElement;
    elements: Dictionary<any> = {};
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
                {
                    props.content.map((e: iCmsItem) => <Section
                        ref={ee => { this.elements[e.key] = ee }}
                        key={e.key}
                        item={e}
                        screenThreshold={this.props.screenThreshold}
                    />)
                }
            </div>
        )
    }
}
