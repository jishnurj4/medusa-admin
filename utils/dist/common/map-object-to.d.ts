type RemapInputObject = Record<string, unknown[]>;
type RemapConfig = {
    mapTo: string;
    valueFrom: string;
};
export type MapToConfig = {
    [key: string]: RemapConfig[];
};
/**
 * Create a new object with the keys remapped and the values picked from the original object based
 * on the map config
 *
 * @param object input object
 * @param mapTo configuration to map the output object
 * @param removeIfNotRemapped if true, the keys that are not remapped will be removed from the output object
 * @param pick if provided, only the keys in the array will be picked from the output object
 */
export declare function mapObjectTo<TResult = any, T extends RemapInputObject = RemapInputObject>(object: T, mapTo: MapToConfig, { removeIfNotRemapped, pick, }?: {
    removeIfNotRemapped?: boolean;
    pick?: string[];
}): TResult;
export {};
//# sourceMappingURL=map-object-to.d.ts.map