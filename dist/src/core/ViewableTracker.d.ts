import { IViewableTracker } from '../type/interface';
export declare class ViewableTracker implements IViewableTracker {
    trackViewable(targetElement: HTMLDivElement, callback: () => void): void;
    trackViewableLost(targetElement: HTMLDivElement, callback: () => void): void;
    trackViewableMrc50(targetElement: HTMLDivElement, callback: () => void): void;
    trackViewableMrc100(targetElement: HTMLDivElement, callback: () => void): void;
    trackViewableVideo50(targetElement: HTMLDivElement, callback: () => void): void;
    private createObserver;
}
