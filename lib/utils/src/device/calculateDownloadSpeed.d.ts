/**
 * 计算文件下载速度
 * @param fileURL 文件的URL
 * @returns 返回一个Promise，解析为下载速度（单位：字节/秒）
 */
export declare function calculateDownloadSpeed(fileURL: string): Promise<number>;
