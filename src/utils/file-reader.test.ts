import * as mockFs from 'mock-fs';
import { readFileLineByLine } from './file-reader';

describe('readFileLineByLine', () => {
  beforeAll(() => {
    mockFs({
      './data.txt': 'file\ncontent\nhere'
    });
  });

  afterAll(() => {
    mockFs.restore();
  });

  it('should reject the promise when the file name is empty', async () => {
    try {
      await readFileLineByLine('');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  it('should reject the promise when the file not exists', async () => {
    try {
      await readFileLineByLine('test.txt');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  it('should resolve with the content array when the file exists', async () => {
    const result = await readFileLineByLine('data.txt');
    
    expect(result).toEqual(['file', 'content', 'here']);
  });
});
