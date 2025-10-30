import { IFluidPlayerEvent, IVastAdavanced, VideoRenderOptions } from './type';
import { VideoBid } from './type/bid';
import { IDomainLogger, IViewableTracker } from './type/interface';
export declare class VideoRenderApplicationService {
    private domainLogger;
    private viewableTracker;
    constructor(domainLogger: IDomainLogger, viewableTracker: IViewableTracker);
    render(targetElement: HTMLDivElement, bid: VideoBid, options: VideoRenderOptions, vastAdvanced?: IVastAdavanced, playerEvent?: IFluidPlayerEvent): Promise<void>;
}
