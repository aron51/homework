import { createNodeArrayFromLines } from './process-lines';
import { Node } from '../models';

describe('createNodeArrayFromLines', () => {
  it('should return an empty array when there is no value', () => {
    const expected = [];
    const actual = createNodeArrayFromLines([]);

    expect(actual).toEqual(expected);
  });

  it('should return an array with one node', () => {
    const expected = [new Node('x')];
    const actual = createNodeArrayFromLines(['x => ']);

    expect(actual).toEqual(expected);
  });

  it('should return an array with two nodes', () => {
    const x = new Node('x');
    const y = new Node('y');

    x.addNeighbour(y);

    const expected = [x, y];
    const actual = createNodeArrayFromLines(['x => y', 'y => ']);

    expect(actual).toEqual(expected);
  });
});
