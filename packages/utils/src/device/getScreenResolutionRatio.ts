//  获取屏幕分辨率
export function getScreenResolutionRatio(): { width: number; height: number } {
  return {
    width: window.screen.width,
    height: window.screen.height
  };
}
