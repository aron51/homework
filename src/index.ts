import * as fs from 'fs';
import * as readLine from 'readline'

const reader = readLine.createInterface(fs.createReadStream("data.txt"))

reader.on("line", (line: string) => {
   console.log(line)
})
