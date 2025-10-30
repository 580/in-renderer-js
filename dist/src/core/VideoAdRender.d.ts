import { VideoBid } from '../type/bid';
import { IVideoPlayer, IViewableTracker } from '../type/interface';
export declare class VideoAdRender {
    private viewableTracker;
    constructor(viewableTracker: IViewableTracker);
    render(targetElement: HTMLDivElement, bid: VideoBid, videoPlayer: IVideoPlayer, fullClickArea?: boolean): void;
    private renderContainer;
}
