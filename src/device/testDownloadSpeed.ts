export function testDownloadSpeed(): Promise<{ speed: number; costTime: number }> {
  const fileSize = 4430; // 文件大小，单位是 kb
  const fileURL = 'your_file_url_here'; // 替换为实际文件的 URL

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = `${fileURL}?_t=${Math.random()}`; // 加个时间戳以避免浏览器只发起一次请求
    const startTime = new Date().getTime();

    img.onload = function () {
      const endTime = new Date().getTime();
      const costTime = endTime - startTime; // 下载耗时，单位是毫秒
      const speed = (fileSize / costTime) * 1000; // 下载速度，单位是 kb/s

      resolve({ speed, costTime });
    };

    img.onerror = reject;
  });
}
