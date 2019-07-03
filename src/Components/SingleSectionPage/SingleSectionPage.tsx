import * as React from 'react';
import { iCmsItem, Dictionary, iCemesterProps } from '../../models';
import { Section } from '../Section/Section';
import { GET_URL } from '../SinglePage/SinglePage';
import {keyBy} from 'lodash.keyby';
export interface SingleSectionPageProps extends iCemesterProps {
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
            {
                props.header &&
                <div className="ssp__header">
                    {props.header}
                </div>
            }
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