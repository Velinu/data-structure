import { NodeElement } from "../interfaces/nodes.types.props";

export function Node(nodeElement: NodeElement) {
  const node = nodeElement.node;
  return (
    <li className="w-2/3 " key={node.id}>
      <p className="font-medium">{node.value}</p>
    </li>
  );
}
