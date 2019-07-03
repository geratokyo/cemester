import * as React from 'react';
import { iCmsItem } from './models';
declare class CustomComponentService {
    customComponent: (item: iCmsItem) => React.ReactNode;
    constructor();
    getCustomComponent: (item: iCmsItem) => React.ReactNode;
    getCustomComponentFn: () => (item: iCmsItem) => React.ReactNode;
    setCustomComponentFn: (cb: (item: iCmsItem) => React.ReactNode) => void;
}
declare const _default: CustomComponentService;
export default _default;
