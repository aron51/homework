import * as fs from 'fs';
import * as readLine from 'readline';

export const readFileLineByLine = (fileName: string): Promise<string[]> =>
  new Promise((resolve, reject) => {
    const lines: string[] = [];
    const readStream = fs.createReadStream(fileName);
    const reader = readLine.createInterface(readStream);

    readStream.on('error', error => reject(error));
    reader.on('close', () => resolve(lines));
    reader.on('line', line => lines.push(line));
  });
