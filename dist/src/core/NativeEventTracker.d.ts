import { EventTracker } from '../type/native';
import { IViewableTracker } from '../type/interface';
export declare class NativeEventTracker {
    private viewableTracker;
    constructor(viewableTracker: IViewableTracker);
    track(targetElement: HTMLDivElement, eventTrackers: EventTracker[]): void;
    private trackEventTracker;
    private generateTrackElement;
    private generateTrackScript;
    private generateTrackImage;
}
