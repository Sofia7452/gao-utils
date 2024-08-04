import dayjs from 'dayjs';
/**
 * 计算两个日期之间的时间差（秒数）
 * @param startDate 开始日期
 * @param endDate 结束日期
 * @returns 返回两个日期之间的秒数差
 */
export function getDiffSeconds(startDate: dayjs.ConfigType, endDate: dayjs.ConfigType): number {
  return dayjs(endDate).diff(dayjs(startDate), 'second');
}
