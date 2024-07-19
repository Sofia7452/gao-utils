import { getBrowserInfo } from '../../src/device/getBrowserInfo';

describe('getBrowserInfo function', () => {
  // Mocking userAgent for different browsers
  const mockUserAgent = (ua: string) => {
    Object.defineProperty(global.navigator, 'userAgent', {
      value: ua,
      configurable: true,
    });
  };

  it('should correctly identify Chrome browser', () => {
    mockUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    const result = getBrowserInfo();
    expect(result.name).toBe('Chrome');
    expect(result.version).toBe('91.0.4472.124');
  });

  it('should correctly identify Firefox browser', () => {
    mockUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0');
    const result = getBrowserInfo();
    expect(result.name).toBe('Firefox');
    expect(result.version).toBe('89.0');
  });

  it('should correctly identify Safari browser', () => {
    mockUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Safari/605.1.15');
    const result = getBrowserInfo();
    expect(result.name).toBe('Safari');
    expect(result.version).toBe('15.0');
  });

  it('should correctly identify Edge browser', () => {
    mockUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.67');
    const result = getBrowserInfo();
    expect(result.name).toBe('Edge');
    expect(result.version).toBe('91.0.864.67');
  });

  it('should correctly identify Internet Explorer browser', () => {
    mockUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; Trident/7.0; rv:11.0) like Gecko');
    const result = getBrowserInfo();
    expect(result.name).toBe('ie');
    expect(result.version).toBe('11.0');
  });
});
