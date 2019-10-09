import { NodeStatus } from '../enums';
import { Node } from '../models';

export class TopologicalSort {
  private stack: Node[];

  constructor() {
    this.stack = [];
  }

  private visit(node: Node): void {
    node.status = NodeStatus.PROCESSING;

    node.neighbours.forEach(neighbour => {
      if (neighbour.status === NodeStatus.UNPROCESSED) {
        this.visit(neighbour);
      } else if (neighbour.status === NodeStatus.PROCESSING) {
        throw new Error('Cyclical dependency was detected!');
      }
    });

    node.status = NodeStatus.PROCESSED;
    this.stack.push(node);
  }

  public topologicalSort(graph: Node[]): Node[] {
    graph.forEach(node => {
      if (node.status === NodeStatus.UNPROCESSED) {
        this.visit(node);
      }
    });

    return this.stack;
  }
}
