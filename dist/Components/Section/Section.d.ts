import * as React from 'react';
import { iCmsItem, iCmsProps } from '../../models';
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
export declare class Section extends React.Component<SectionProps, SectionState> {
    el: HTMLElement;
    constructor(p: any);
    static defaultProps: Partial<SectionProps>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: SectionProps, prevState: SectionState): void;
    shouldComponentUpdate(nextProps: SectionProps, nextState: SectionState): boolean;
    isInView: () => boolean;
    shouldShowChildren: () => number;
    getHtmlElement: () => HTMLElement;
    render(): JSX.Element;
}
