type MacroReplacerProps = {
    clickThrough?: string;
    cpm: number;
};
export declare class MacroReplacer {
    private clickThrough;
    private cpm;
    constructor({ clickThrough, cpm }: MacroReplacerProps);
    replace(ad: string): string;
}
export {};
