import { SEPARATOR } from './constants';
import { Node } from '../models';

export const createNodeArrayFromLines = (lines: string[]): Node[] => {
    const nodes = new Map<string, Node>();

    lines.forEach(line => {
        const label = line.split(SEPARATOR)[0].trim();

        nodes.set(label, new Node(label));
    })

    lines.forEach(line => {
        const splitted =  line.split(SEPARATOR);
        const label = splitted[0].trim();
        const dependency = splitted[1].trim();

        if (dependency) {
            const node = nodes.get(label);
            const neighbour = nodes.get(dependency);

            node.addNeighbour(neighbour);

            nodes.set(label, node);
        }
    })

    return Array.from(nodes.values());
}
