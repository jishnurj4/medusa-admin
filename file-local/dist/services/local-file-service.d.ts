/// <reference types="multer" />
/// <reference types="node" />
import { AbstractFileService, IFileService } from "@medusajs/medusa";
import { FileServiceGetUploadStreamResult, FileServiceUploadResult, UploadStreamDescriptorType } from "@medusajs/types";
declare class LocalService extends AbstractFileService implements IFileService {
    protected uploadDir_: string;
    protected backendUrl_: string;
    constructor({}: {}, options: any);
    upload(file: Express.Multer.File): Promise<FileServiceUploadResult>;
    uploadProtected(file: Express.Multer.File): Promise<FileServiceUploadResult>;
    uploadFile(file: Express.Multer.File, options?: {}): Promise<FileServiceUploadResult>;
    delete(file: any): Promise<void>;
    getUploadStreamDescriptor(fileData: UploadStreamDescriptorType): Promise<FileServiceGetUploadStreamResult>;
    getDownloadStream(fileData: any): Promise<NodeJS.ReadableStream>;
    getPresignedDownloadUrl(fileData: any): Promise<string>;
    /**
     * Ensure `uploadDir_` has nested directories provided as file path
     *
     * @param dirPath - file path relative to the base directory
     * @private
     */
    private ensureDirExists;
}
export default LocalService;
