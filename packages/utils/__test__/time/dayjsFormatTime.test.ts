// getDiffSeconds.test.ts

import { getDiffSeconds } from '../../src/time/dayjsFormatTime';
import dayjs from 'dayjs';

describe('getDiffSeconds', () => {
  it('should calculate difference in seconds correctly', () => {
    const startDate = dayjs('2024-07-17T00:00:00Z');
    const endDate = dayjs('2024-07-18T12:00:00Z');
    expect(getDiffSeconds(startDate, endDate)).toEqual(129600);
  });

  it('should handle invalid dates gracefully', () => {
    const startDate = 'invalid date';
    const endDate = dayjs('2024-07-18T12:00:00Z');
    expect(getDiffSeconds(startDate as any, endDate)).toBeNaN();
  });

  it('should handle same dates', () => {
    const startDate = dayjs('2024-07-17T00:00:00Z');
    const endDate = dayjs('2024-07-17T00:00:00Z');
    expect(getDiffSeconds(startDate, endDate)).toEqual(0);
  });

  it('should handle negative difference', () => {
    const startDate = dayjs('2024-07-18T12:00:00Z');
    const endDate = dayjs('2024-07-17T00:00:00Z');
    expect(getDiffSeconds(startDate, endDate)).toEqual(-129600);
  });
});
