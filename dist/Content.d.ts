import * as React from 'react';
import { iCmsItem, iCmsProps } from './models';
export interface ContentProps extends iCmsProps {
    item: iCmsItem;
    offset?: number;
}
export interface ContentState {
}
export declare const Content: React.SFC<ContentProps>;
