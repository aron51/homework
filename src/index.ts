import { TopologicalSort } from './topological-sort';
import { Node } from './models/node';

const n1 = new Node('X');
const n2 = new Node('Y');
const n3 = new Node('Z')

n2.addNeighbour(n3);


const graph = [n1,n2,n3];

const t = new TopologicalSort()

try {
    const result = t.topologicalSort(graph);

    console.log(result);
}catch(error) {
    console.error(error);
}