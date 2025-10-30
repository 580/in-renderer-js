import { Asset, Link } from '../type/native';
export declare class NativeLinkHandler {
    handle(targetElement: HTMLDivElement, link: Link, assets: Asset[]): void;
    private emitClickTrackers;
}
