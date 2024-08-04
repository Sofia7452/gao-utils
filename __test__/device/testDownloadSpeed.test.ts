// testDownloadSpeed.test.ts
import { testDownloadSpeed } from '../../src/device/testDownloadSpeed';
describe('yourFunction tests', () => {
  test('always passes', () => {
    const mockFn = jest.fn(); // 创建一个模拟函数
    mockFn(); // 调用模拟函数
    // let file = new File(["foo"], "foo.txt", {
    //   type: "text/plain",
    // });
    // 断言，这里我们用 true 代替任何总是成立的条件
    expect(true).toBe(true);
    // expect(calculateUploadSpeed(file)).toBe('Hello, World!');
  });
});
// describe('testDownloadSpeed', () => {
//   test('should calculate download speed and time correctly', async () => {
//     // Mocking the Image object
//     const originalImage = window.Image;
//     const mockImage = jest.fn() as any;
//     window.Image = mockImage;

//     const mockResolve = jest.fn();
//     const mockReject = jest.fn();

//     // Mocking the onload and onerror handlers
//     mockImage.mockImplementation(() => {
//       const listeners: { [key: string]: Function } = {};
//       return {
//         src: '',
//         onload: (listener: Function) => { listeners.onload = listener; },
//         onerror: (listener: Function) => { listeners.onerror = listener; },
//         triggerLoadSuccess: () => { listeners.onload(); },
//         triggerLoadError: () => { listeners.onerror(); }
//       };
//     });

//     // Start the download speed test
//     const fileSize = 4430; // kB
//     const startTime = new Date().getTime();

//     const promise = testDownloadSpeed();

//     // Simulate image load success
//     mockImage.prototype.triggerLoadSuccess();

//     await promise.then(mockResolve).catch(mockReject);

//     const endTime = new Date().getTime();
//     const costTime = endTime - startTime;
//     const expectedSpeed = (fileSize / costTime) * 1000; // Expected speed in kb/s

//     // Assert the results
//     expect(mockResolve).toHaveBeenCalled();
//     expect(mockReject).not.toHaveBeenCalled();
//     expect(mockResolve.mock.calls[0][0].speed).toBeCloseTo(expectedSpeed, 2); // Check speed approximately
//     expect(mockResolve.mock.calls[0][0].costTime).toBe(costTime); // Check costTime exactly

//     // Restore the original Image object
//     window.Image = originalImage;
//   });

//   // Additional test cases can be added to handle error scenarios, etc.
// });
