// 目前改方法被废弃了，但依旧可以用，且兼容性较好
export function getOs(): string {
  const isWin: boolean = navigator.platform === 'Win32' || navigator.platform === 'Windows';
  const isMac: boolean = navigator.platform.includes('Mac');
  
  if (isMac) {
    return 'Mac';
  }
  
  const isUnix: boolean = navigator.platform === 'X11' && !isWin && !isMac;
  if (isUnix) {
    return 'Unix';
  }
  
  const isLinux: boolean = navigator.platform.indexOf('Linux') > -1;
  if (isLinux) {
    return 'Linux';
  }
  
  if (isWin) {
    return 'Windows';
  }
  
  return 'Other';
}
