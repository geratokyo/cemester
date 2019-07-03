import * as React from 'react';
import { ScrollbarProps } from 'react-custom-scrollbars';
export interface SpringScrollProps extends ScrollbarProps {
    className?: string;
}
export interface SpringScrollState {
}
export declare class SpringScroll extends React.Component<SpringScrollProps, SpringScrollState> {
    springSystem: any;
    spring: any;
    constructor(props: any, ...rest: any[]);
    componentDidMount(): void;
    componentWillUnmount(): void;
    getScrollTop(): number;
    getScrollHeight(): number;
    scrollTop(top: any): void;
    handleSpringUpdate(spring: any): void;
    render(): JSX.Element;
}
