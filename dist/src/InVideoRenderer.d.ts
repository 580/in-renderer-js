import { IFluidPlayerEvent, IVastAdavanced, VideoRenderOptions } from './type';
import { Bid } from './type/bid';
export declare class InVideoRenderer {
    render(targetId: string, bid: Bid, options: VideoRenderOptions | undefined, vastAdvanced: IVastAdavanced, playerEvent: IFluidPlayerEvent): Promise<void>;
    getCurrentAdData(): {};
}
