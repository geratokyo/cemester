import * as React from 'react';
import { iCemesterProps } from './models';
export interface CemesterProps extends iCemesterProps {
}
export interface CemesterState {
}
export declare class Cemester extends React.Component<CemesterProps, CemesterState> {
    constructor(p: CemesterProps);
    static defaultProps: Partial<CemesterProps>;
    render(): JSX.Element;
}
