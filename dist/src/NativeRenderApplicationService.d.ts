import { NativeRenderOptions } from './type';
import { NativeBid } from './type/bid';
import { IDomainLogger, IViewableTracker } from './type/interface';
export declare class NativeRenderApplicationService {
    private domainLogger;
    private viewableTracker;
    constructor(domainLogger: IDomainLogger, viewableTracker: IViewableTracker);
    render(targetElement: HTMLDivElement, bid: NativeBid, options: NativeRenderOptions): Promise<void>;
    private validateBid;
}
