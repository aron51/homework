import { Nodes } from "./models/nodes";

export const createNodes = (data: string[]): Nodes =>
  data.reduce((total, current) => {
    const splitted = current.split("=>");
    const label = splitted[0].trim();
    const dependency = splitted[1].trim();

    return { ...total, [label]: { dependency } };
  }, {});

export const processNodes = (
  keys: string[],
  nodes: Nodes,
  start: string[] = [],
  depth: number = 0
): string[] => {
  if (depth > Object.keys(nodes).length) {
    throw Error("Circular dependency has been detected!");
  }

  const processed = keys.reduce(
    (total, current) =>
      !nodes[current].dependency || total.includes(nodes[current].dependency)
        ? [...total, current]
        : total,
    start
  );
  const unproccessedKeys = keys.filter(key => !processed.includes(key));

  return unproccessedKeys.length
    ? processNodes(unproccessedKeys, nodes, processed, depth + 1)
    : processed;
};
