export function getBrowserInfo(): { name: string; version: string } {
  const userAgent = navigator.userAgent.toLowerCase();

  // 检查userAgent以确定浏览器类型
  const isIE = userAgent.includes('msie') || userAgent.includes('trident');
  const isEdge = userAgent.includes('edg/');
  const isFirefox = userAgent.includes('firefox/');
  const isChrome = userAgent.includes('chrome/');
  const isSafari = userAgent.includes('safari/') && !isChrome;

  // 从userAgent中提取版本号
  const version =
    (isIE && userAgent.match(/(msie|rv:)\s?([\d.]+)/)?.[2]) ||
    (isEdge && userAgent.match(/edg\/([\d.]+)/)?.[1]) ||
    (isFirefox && userAgent.match(/firefox\/([\d.]+)/)?.[1]) ||
    (isChrome && userAgent.match(/chrome\/([\d.]+)/)?.[1]) ||
    (isSafari && userAgent.match(/version\/([\d.]+)/)?.[1]) ||
    '';

  // 根据浏览器类型返回名称
  const name =
    (isIE && 'ie') ||
    (isEdge && 'Edge') ||
    (isFirefox && 'Firefox') ||
    (isChrome && 'Chrome') ||
    (isSafari && 'Safari') ||
    '';

  // 返回包含浏览器名称和版本号的对象
  return {
    name,
    version,
  };
}
