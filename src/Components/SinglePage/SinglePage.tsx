import * as React from 'react';
import { iCmsItem, iPageProps, Dictionary } from '../../models';
import Section from '../Section/Section';
import { Content } from '../../Content';

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
                    props.content.map((e: iCmsItem) => <Content
                        key={e.key}
                        item={e}
                    />)
                }
            </div>
        )
    }
}
