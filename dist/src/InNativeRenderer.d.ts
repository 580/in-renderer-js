import { Bid } from './type/bid';
import { NativeRenderOptions } from './type';
export declare class InNativeRenderer {
    render(targetId: string, bid: Bid, options?: NativeRenderOptions): Promise<void>;
}
