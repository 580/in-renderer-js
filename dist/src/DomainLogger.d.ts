import { Logger } from './Logger';
import { IDomainLogger } from './type/interface';
export declare class DomainLogger implements IDomainLogger {
    private logger;
    constructor(logger: Logger);
    invalidBid(): void;
    unsupportedNativeAsset(): void;
    missingAdTemplate(): void;
    invalidNativeVideoContainer(): void;
    invalidTargetElement(): void;
}
