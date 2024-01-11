/// <reference types="node" />
interface ResizeImageOptions {
    readonly name: string;
    readonly width?: number | undefined | null;
    readonly height?: number | undefined | null;
}
/**
 * Resize image with sharp
 * @param {ResizeImageOptions} options
 * @return {Promise<Buffer>}
 */
declare const _default: (options: ResizeImageOptions) => Promise<Buffer>;
export default _default;
