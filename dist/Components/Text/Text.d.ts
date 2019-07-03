import * as React from 'react';
import { iCmsItem, iCmsProps } from '../../models';
export interface TextProps extends iCmsProps {
    className?: string;
    item: iCmsItem;
}
export declare const Text: React.SFC<TextProps>;
