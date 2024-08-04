// src/time/formatTime.test.ts

import { formatArrayHms } from '../../src/time/formatTime';

describe('formatArrayHms', () => {
  it('should format seconds to hours, minutes, seconds correctly', () => {
    expect(formatArrayHms(0)).toEqual(['00', '00', '00']);
    expect(formatArrayHms(3600)).toEqual(['01', '00', '00']);
    expect(formatArrayHms(7265)).toEqual(['02', '01', '05']);
  });

  it('should handle negative seconds', () => {
    expect(formatArrayHms(-1)).toEqual(['00', '00', '00']);
    expect(formatArrayHms(-3600)).toEqual(['00', '00', '00']);
    expect(formatArrayHms(-7265)).toEqual(['00', '00', '00']);
  });

  it('should return ["00", "00", "00"] if input is not a number', () => {
    expect(formatArrayHms(NaN)).toEqual(['00', '00', '00']);
    expect(formatArrayHms(null as any)).toEqual(['00', '00', '00']);
    expect(formatArrayHms(undefined as any)).toEqual(['00', '00', '00']);
  });
});
