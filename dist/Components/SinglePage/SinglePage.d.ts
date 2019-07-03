import * as React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { iCemesterProps, Dictionary } from '../../models';
import { Section } from '../Section/Section';
export interface SinglePageProps extends iCemesterProps {
    className?: string;
}
export interface SinglePageState {
    isNavFixed: boolean;
    offset: number;
}
export declare class SinglePage extends React.Component<SinglePageProps, SinglePageState> {
    topEl: HTMLElement;
    el: HTMLDivElement;
    elements: Dictionary<Section>;
    sectionOffset: any;
    scrollEl: Scrollbars;
    windowHeight: number;
    constructor(p: SinglePageProps);
    componentDidMount(): void;
    scrollToSection: (sectionKey: string) => void;
    scroll: (ref: HTMLElement) => void;
    getOffset: (el: HTMLElement) => {
        top: number;
    };
    handleScroll: (e: any) => void;
    checkTopNavBar: (offset: number) => void;
    render(): JSX.Element;
}
export declare const GET_URL: (url: string | (() => string)) => string;
