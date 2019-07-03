import * as React from 'react';
import { iCmsItem, iCmsProps } from '../../models';
export interface ImageProps extends iCmsProps {
    className?: string;
    item: iCmsItem;
}
export declare const Image: React.SFC<ImageProps>;
