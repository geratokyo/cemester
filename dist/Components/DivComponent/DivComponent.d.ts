import * as React from 'react';
import { iCmsItem, iCmsProps } from '../../models';
export interface DivComponentProps extends iCmsProps {
    className?: string;
    item: iCmsItem;
}
export declare const DivComponent: React.SFC<DivComponentProps>;
