import { getScreenResolutionRatio } from '../../src/device/getScreenResolutionRatio'; // 假设函数定义在 screenUtils.ts 中

describe('getScreenResolutionRatio', () => {
  it('should return an object with width and height properties', () => {
    // 模拟 window.screen 的宽度和高度
    const mockScreenWidth = 1920;
    const mockScreenHeight = 1080;
    
    // 使用 jest.spyOn 来模拟 window.screen 对象
    jest.spyOn(window.screen, 'width', 'get').mockReturnValue(mockScreenWidth);
    jest.spyOn(window.screen, 'height', 'get').mockReturnValue(mockScreenHeight);

    // 调用函数
    const result = getScreenResolutionRatio();

    // 断言返回的对象是否符合预期
    expect(result).toEqual({
      width: mockScreenWidth,
      height: mockScreenHeight
    });
  });
});
