import { Node } from './node';

describe('Node', () => {
  let node: Node;

  beforeEach(() => {
    node = new Node('X');
  });

  describe('creation', () => {
    it('should create a new node with the label', () => {
      const expected = 'X';

      expect(node.label).toEqual(expected);
    });
  });

  describe('addNeighbour', () => {
    it('should add the node to the neighbours list', () => {
      const neighbour = new Node('Y');

      node.addNeighbour(neighbour);

      expect(node.neighbours).toEqual([neighbour]);
    });

    it('should add multiple multiple neighbours to the list', () => {
      const firstNeighbour = new Node('Y');
      const secondNeighbour = new Node('Z');

      node.addNeighbour(firstNeighbour);
      node.addNeighbour(secondNeighbour);

      expect(node.neighbours).toEqual([firstNeighbour, secondNeighbour]);
    });
  });
});
