// jest有问题可以先忽略
export function calculateUploadSpeed(file: File): Promise<number> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const fileSize = file.size;
    const startTime = new Date().getTime();

    xhr.upload.onprogress = event => {
      if (event.lengthComputable) {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
        const uploadedSize = event.loaded;
        const uploadSpeed = uploadedSize / (elapsedTime / 1000); // Upload speed in bytes per second
        resolve(uploadSpeed);
      }
    };

    xhr.upload.onerror = () => {
      reject(new Error('Upload failed.'));
    };

    xhr.open('POST', '/upload', true);
    xhr.send(file);
  });
}
