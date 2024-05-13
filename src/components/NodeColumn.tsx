import { NodeColumnProps } from "../interfaces/node.column.props";
import { Node } from "./Node";
import { NodeElement } from "../interfaces/nodes.types.props";

export const NodeColumn = (column: NodeColumnProps) => {
  return (
    <ul className="">
      {column.items.map((nodeElement: NodeElement, index: number) => (
        <Node key={index} node={nodeElement.node} />
      ))}
    </ul>
  );
};
