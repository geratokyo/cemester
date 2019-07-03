import * as React from 'react';
import { iCmsItem, Dictionary, iCemesterProps } from '../../models';
import { Section } from '../Section/Section';
export interface SingleSectionPageProps extends iCemesterProps {
    className?: string;
}
export interface SingleSectionPageState {
    content: Dictionary<iCmsItem>;
    url: string;
}
export declare class SingleSectionPage extends React.Component<SingleSectionPageProps, SingleSectionPageState> {
    sectionEl: Section;
    constructor(p: SingleSectionPageProps);
    componentDidUpdate(prevProps: SingleSectionPageProps, prevState: SingleSectionPageState): void;
    render(): JSX.Element;
}
