import { Link } from '../type/native';
export declare class NativeSpecialAssetMacroReplacer {
    replace(target: string, link: Link, privacy?: string): string;
    private replaceLinkMacros;
    private replacePrivacyMacros;
}
