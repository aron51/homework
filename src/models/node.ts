export class Node {
    label: string;
    visited: boolean;
    neighbours: Node[];
  
    constructor(label: string) {
      this.label = label;
      this.visited = false;
      this.neighbours = [];
    }
  
    public addNeighbour(node: Node): void {
      this.neighbours.push(node);
    }
  }
  