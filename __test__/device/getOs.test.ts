import { getOs } from '../../src/device/getOs'; 

describe('getOs function', () => {
  // Test case for Windows platform
  test('returns "Windows" on Windows platform', () => {
    Object.defineProperty(navigator, 'platform', {
      value: 'Win32',
      configurable: true,
    });
    expect(getOs()).toBe('Windows');
  });

  // Test case for macOS platform
  test('returns "Mac" on macOS platform', () => {
    Object.defineProperty(navigator, 'platform', {
      value: 'MacIntel',
      configurable: true,
    });
    expect(getOs()).toBe('Mac');
  });

  // Test case for Linux platform
  test('returns "Linux" on Linux platform', () => {
    Object.defineProperty(navigator, 'platform', {
      value: 'Linux x86_64',
      configurable: true,
    });
    expect(getOs()).toBe('Linux');
  });

  // Test case for Unix platform
  test('returns "Unix" on Unix platform', () => {
    Object.defineProperty(navigator, 'platform', {
      value: 'X11',
      configurable: true,
    });
    expect(getOs()).toBe('Unix');
  });

  // Test case for other platforms
  test('returns "Other" on other platforms', () => {
    Object.defineProperty(navigator, 'platform', {
      value: 'OtherPlatform',
      configurable: true,
    });
    expect(getOs()).toBe('Other');
  });
});
