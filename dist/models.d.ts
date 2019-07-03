/// <reference types="react" />
export interface iKeyLabel {
    key: string;
    label: string;
}
export interface Dictionary<T> {
    [idx: string]: T;
}
export interface iCmsProps {
    cmsOptions?: iCmsComponentOptions;
}
export interface iCmsComponentOptions {
    isInView?: boolean;
}
export interface iCmsItem {
    key: string;
    type: string;
    parent?: string;
    content?: any | iImage | iCustomContent;
    className?: string;
    animation?: string;
    children?: iCmsItem[];
}
export interface iImage {
    altText?: string;
    imgSrc: string;
}
export interface iCustomContent {
    type: string;
    data: any;
}
export declare const DEFAULTS: {
    SCREEN_THRESHOLD: number;
};
export interface iCemesterProps {
    className?: string;
    header?: React.ReactNode;
    content: iCmsItem[];
    url: string | (() => string);
    customComponents: (item: iCmsItem) => React.ReactNode;
    screenThreshold?: number;
}
