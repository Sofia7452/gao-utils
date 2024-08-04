/**
 * 格式化秒数为时分秒数组
 * @param seconds 总秒数
 * @returns 返回格式化后的时分秒数组 [小时, 分钟, 秒]
 */
export function formatArrayHms(seconds: number): string[] {
  if (seconds) {
    let hour = Math.floor(seconds / 3600); // 计算小时数
    if (hour < 0) {
      hour = 0;
    }
    const remainingSeconds = seconds % 3600; // 计算剩余的秒数
    let minutes = Math.floor(remainingSeconds / 60); // 计算分钟数
    if (minutes < 0) {
      minutes = 0;
    }
    let formattedSeconds = Math.floor(remainingSeconds % 60); // 取整得到剩余的秒数
    if (formattedSeconds < 0) {
      formattedSeconds = 0;
    }

    return [
      String(hour).padStart(2, '0'),
      String(minutes).padStart(2, '0'),
      String(formattedSeconds).padStart(2, '0')
    ];
  } else {
    return ['00', '00', '00']; // 若秒数为0或者未传入参数，则返回初始值
  }
}
