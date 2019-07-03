import * as React from 'react';
import { iCmsItem, iCmsProps } from '../../models';
export interface ContainerProps extends iCmsProps {
    className?: string;
    item: iCmsItem;
}
export declare const Container: React.SFC<ContainerProps>;
