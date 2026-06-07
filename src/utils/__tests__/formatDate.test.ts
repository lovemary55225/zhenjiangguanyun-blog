import { describe, it, expect } from 'vitest';
import { formatDate, formatDateShort } from '../formatDate';

describe('formatDate', () => {
  it('formats a date in Chinese locale', () => {
    const date = new Date('2024-06-15');
    const result = formatDate(date);
    expect(result).toContain('2024');
    expect(result).toContain('6');
    expect(result).toContain('15');
  });

  it('formats a date string', () => {
    const result = formatDate('2024-01-01');
    expect(result).toContain('2024');
  });
});

describe('formatDateShort', () => {
  it('returns YYYY-MM-DD format', () => {
    const date = new Date('2024-06-15');
    const result = formatDateShort(date);
    expect(result).toBe('2024-06-15');
  });
});
