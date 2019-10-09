import { Node } from './models';

export class TopologicalSort {
  private stack: Node[];

  constructor() {
    this.stack = [];
  }

  private visit(node: Node) {
    node.visited = true;

    node.neighbours.forEach(neighbour => {
      if (neighbour.visited) {
        throw new Error('Cyclical dependency was detected!');
      }

      this.visit(neighbour);
    });

    this.stack.push(node);
  }

  public topologicalSort(graph: Node[]): Node[] {
    graph.forEach(node => {
      if (!node.visited) {
        this.visit(node);
      }
    });

    return this.stack;
  }
}
