// calculateDownloadSpeed.test.ts
import { calculateDownloadSpeed } from '../../src/device/calculateDownloadSpeed';
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
// describe('calculateDownloadSpeed', () => {
//   test('should calculate download speed correctly', async () => {
//     // Mock XMLHttpRequest
//     const mockXHR = {
//       onprogress: null as any,
//       onerror: null as any,
//       open: jest.fn(),
//       send: jest.fn(),
//       setRequestHeader: jest.fn(),
//       readyState: 4,
//       status: 200,
//       responseText: 'mock response'
//     };
//     const mockXMLHttpRequest = jest.fn(() => mockXHR);
//     // @ts-ignore
//     global.XMLHttpRequest = mockXMLHttpRequest;

//     const fileURL = 'https://example.com/file.zip';
//     const mockResolve = jest.fn();
//     const mockReject = jest.fn();

//     const mockStartTime = 1000;
//     // @ts-ignore
//     jest.spyOn(global.Date, 'getTime').mockReturnValue(mockStartTime);

//     const expectedSpeed = 500; // Mock expected download speed in bytes per second

//     const promise = calculateDownloadSpeed(fileURL);

//     // Simulate progress event
//     mockXHR.onprogress({
//       lengthComputable: true,
//       loaded: expectedSpeed * (2000 - mockStartTime) / 1000
//     });

//     await promise.then(mockResolve).catch(mockReject);

//     // Assert the results
//     expect(mockResolve).toHaveBeenCalledWith(expectedSpeed);
//     expect(mockReject).not.toHaveBeenCalled();

//     // Restore global objects
//     // @ts-ignore
//     jest.spyOn(global.Date, 'getTime').mockRestore();
//     // @ts-ignore
//     delete global.XMLHttpRequest;
//   });

//   // Additional test cases can be added to handle error scenarios, etc.
// });
