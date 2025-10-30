type LogoOption = {
    imageUrl?: string;
    clickUrl?: string;
};
export interface IVastAdavanced {
    vastLoaded?: () => void;
    noVastVideo?: () => void;
    vastVideoSkipped?: () => void;
    vastVideoEnded?: () => void;
}
export interface IFluidPlayerEvent {
    start?: (adData: any) => void;
    firstQuartile?: (adData: any) => void;
    midpoint?: (adData: any) => void;
    thirdQuartile?: (adData: any) => void;
    complete?: (adData: any) => void;
    progress?: (adData: any) => void;
    impression?: (adData: any) => void;
    clickTracking?: (adData: any) => void;
    iconClickTrough?: (adData: any) => void;
}
export type VideoRenderOptions = {
    logo?: LogoOption;
    onImpressionViewable?: () => void;
    onAdVideoComplete?: () => void;
    fullClickArea?: boolean;
};
export type FluidPlayerFactoryOptions = {
    vastUrl?: string;
    vastXml?: string;
    logo?: LogoOption;
};
export type BannerRenderOptions = {
    clickThrough?: string;
    onImpressionViewable?: () => void;
};
export type NativeRenderOptions = {
    onImpressionViewable?: () => void;
};
export type InRendererOptions = {
    clickThrough?: string;
    logo?: LogoOption;
    onImpressionViewable?: () => void;
    onAdVideoComplete?: () => void;
    fullClickArea?: boolean;
};
export type InVideoRendererOptions = {
    onImpressionViewable?: () => void;
    onAdVideoComplete?: () => void;
    logo?: LogoOption;
    fullClickArea?: boolean;
};
export type InNativeRendererOptions = {
    onImpressionViewable?: () => void;
};
export {};
