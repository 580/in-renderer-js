import { BannerRenderOptions } from './type';
import { BannerBid } from './type/bid';
import { IBannerRenderApplicationService, IDomainLogger, IViewableTracker } from './type/interface';
export declare class BannerRenderApplicationService implements IBannerRenderApplicationService {
    private domainLogger;
    private viewableTracker;
    constructor(domainLogger: IDomainLogger, viewableTracker: IViewableTracker);
    render(targetElement: HTMLDivElement, bid: BannerBid, options: BannerRenderOptions): void;
    private validateBid;
}
