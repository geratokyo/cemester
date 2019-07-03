import * as React from 'react';
import { iCmsItem, iCmsProps } from '../../models';
export interface CustomProps extends iCmsProps {
    className?: string;
    item: iCmsItem;
}
export declare const Custom: React.SFC<CustomProps>;
