import { Node } from './models';
import { TopologicalSort } from './topological-sort';

describe('TopologicalSort', () => {
  let topologicalSort: TopologicalSort;
  let a: Node;
  let b: Node;

  beforeEach(() => {
    topologicalSort = new TopologicalSort();
    a = new Node('a');
    b = new Node('b');
  });

  it('should return the single node', () => {
    const actual = topologicalSort.topologicalSort([a]);

    expect(actual).toEqual([a]);
  });

  it('should return the two nodes', () => {
    const actual = topologicalSort.topologicalSort([a, b]);
    const expected = [a, b];

    expect(actual).toEqual(expected);
  });

  it('should return the two nodes in the given order', () => {
    a.addNeighbour(b);

    const actual = topologicalSort.topologicalSort([a, b]);
    const expected = [b, a];

    expect(actual).toEqual(expected);
  });

  it('should throw a Cyclical dependency was detected! error', () => {
    a.addNeighbour(b);
    b.addNeighbour(a);

    const actual = () => topologicalSort.topologicalSort([a, b]);

    expect(actual).toThrowError('Cyclical dependency was detected!');
  });
});
