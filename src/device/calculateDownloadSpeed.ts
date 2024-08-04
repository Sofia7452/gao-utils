/**
 * 计算文件下载速度
 * @param fileURL 文件的URL
 * @returns 返回一个Promise，解析为下载速度（单位：字节/秒）
 */
export function calculateDownloadSpeed(fileURL: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const startTime = new Date().getTime();

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime; // 毫秒
        const downloadedSize = event.loaded; // 已下载字节
        const downloadSpeed = downloadedSize / (elapsedTime / 1000); // 字节/秒
        resolve(downloadSpeed);
      }
    };

    xhr.onerror = () => {
      reject(new Error('下载失败'));
    };

    xhr.open('GET', fileURL, true);
    xhr.send();
  });
}
