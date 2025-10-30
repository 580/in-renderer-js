import { InRendererOptions } from './type';
import { Bid } from './type/bid';
export declare class InRenderer {
    render(targetId: string, bid: Bid, options?: InRendererOptions): Promise<void>;
}
