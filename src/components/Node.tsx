import { NodeElement } from "../interfaces/nodes.types.props";

export function Node(nodeElement: NodeElement) {
  const node = nodeElement.node;
  return (
    <li
      className="w-full bg-zinc-300 mb-2 last:mb-0 px-2 py-3 rounded border-[2px] border-zinc-400"
      key={node.id}
    >
      <p className="font-medium">{node.value}</p>
    </li>
  );
}
