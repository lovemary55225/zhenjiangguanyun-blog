import { describe, it, expect } from 'vitest';
import { slugify, slugifyChinese } from '../slugify';

describe('slugify', () => {
  it('converts text to lowercase slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('removes special characters', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  it('handles Chinese text', () => {
    expect(slugifyChinese('你好世界')).toBe('你好世界');
  });

  it('replaces spaces with hyphens in Chinese', () => {
    expect(slugifyChinese('你好 世界')).toBe('你好-世界');
  });
});
