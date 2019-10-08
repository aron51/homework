import * as fs from 'fs';
import * as readLine from 'readline'

const readFile = (fileName: string): void => {
    const reader = readLine.createInterface(fs.createReadStream(fileName))

    reader.on('line', (line: string) => {
       console.log(line.split('=>'))
    })
}


readFile('data.txt');
