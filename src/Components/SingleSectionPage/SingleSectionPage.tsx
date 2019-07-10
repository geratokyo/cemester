import * as React from 'react';
import { iCmsItem, Dictionary, iPageProps } from '../../models';
import { Section } from '../Section/Section';
import { keyBy } from '../../Cemester';
export interface SingleSectionPageProps extends iPageProps {
    className?: string;
}


export interface SingleSectionPageState {
    content: Dictionary<iCmsItem>; 
    url: string; 
}


export class SingleSectionPage extends React.Component<SingleSectionPageProps, SingleSectionPageState>{
    sectionEl:Section; 
    constructor(p: SingleSectionPageProps) {
        super(p)
        let url = GET_URL(p.url); 
        this.state = {
            content: keyBy(p.content, "key"), 
            url: url || p.content[0].key
        }
    }

    componentDidUpdate(prevProps:SingleSectionPageProps, prevState:SingleSectionPageState){
        if(GET_URL(prevProps.url) !== GET_URL(this.props.url)){
            let url = GET_URL(this.props.url); 
            this.setState({
                url: url || this.props.content[0].key
            })
        }
    }

    render() {
        let { props, state } = this;
        let section = state.content[state.url]
        return <div className="ssp">
            <div className="ssp__content">
                <Section
                    ref={ee => { this.sectionEl = ee }}
                    key={section.key}
                    item={section}
                    
                />
            </div>
        </div>
    }
}


export const GET_URL = (url: string | (() => string)) => {
    if (typeof url === "string") {
        return url;
    } else if (typeof url === "function") {
        return url();
    }
} 