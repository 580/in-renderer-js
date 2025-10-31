import { FluidPlayerFactoryOptions, IFluidPlayerEvent, IVastAdavanced } from '../type';
type TVieoAdData = {
    isLinear?: boolean;
    isVideoAdData: boolean;
    currentTime: number;
    videoAdStatus: string;
    videoAdDuration: number;
    updatedAt?: number;
};
export declare class FluidPlayerFactory {
    private target;
    private options;
    adData: TVieoAdData;
    constructor(targetContainer: HTMLDivElement, options: FluidPlayerFactoryOptions);
    create(_rePlay: () => any, vastAdvanced?: IVastAdavanced, playerEvent?: IFluidPlayerEvent): Promise<FluidPlayerInstance>;
    private getVastDataUrl;
    private getVastDataUrlFromVastXml;
}
export {};
