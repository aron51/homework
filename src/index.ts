import {createNodes, processNodes} from './traversal';
import {readFileLineByLine} from './utils/file-reader';


readFileLineByLine('data.txt')
.then(createNodes)
.then(nodes => processNodes(Object.keys(nodes), nodes))
.then(console.log)
.catch(console.error);