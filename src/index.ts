import { TopologicalSort } from './topological-sort';
import { Node } from './models';
import { createNodeArrayFromLines, readFileLineByLine } from './utils';

const sortNodes = (nodes: Node[]): Node[] => {
  const topologicalSort = new TopologicalSort();

  return topologicalSort.topologicalSort(nodes);
};

readFileLineByLine('data.txt')
  .then(createNodeArrayFromLines)
  .then(sortNodes)
  .then(sortedNodes => sortedNodes.map(node => node.label))
  .then(console.log)
  .catch(console.error);
