import { NodeStatus } from "../enums";

export class Node {
    label: string;
    status: NodeStatus;
    neighbours: Node[];
  
    constructor(label: string) {
      this.label = label;
      this.status = NodeStatus.UNPROCESSED;
      this.neighbours = [];
    }
  
    public addNeighbour(node: Node): void {
      this.neighbours.push(node);
    }
  }
  