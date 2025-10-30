import { Asset } from '../type/native';
export declare class NativeVideoRender {
    render(target: HTMLDivElement, assets: Asset[]): Promise<void>;
    private validateContainer;
    private renderVideo;
}
