import { Asset } from '../type/native';
export declare class NativeAssetMacroReplacer {
    replace(target: string, assets: Asset[]): string;
    private replaceAssetMacros;
}
