import { FormEvent, useState } from "react";
import { StackNode } from "./Nodes";
import { NodeProps } from "../interfaces/nodes.types.props";

function Stack() {
  const [newNode, setNewNode] = useState<string>("");
  const [auxNodes, setAuxNodes] = useState<Array<NodeProps>>([]);
  const [stackNodes, setStackNodes] = useState<Array<NodeProps>>([
    { id: 0, value: "s" },
    { id: 1, value: "s2" },
    { id: 2, value: "s3" },
    { id: 3, value: "s4" },
    { id: 4, value: "s5" },
  ]);
  const [queueNodes, setQueueNodes] = useState<Array<NodeProps>>([
    { id: 0, value: "s" },
    { id: 1, value: "s1" },
    { id: 2, value: "s2" },
    { id: 3, value: "s3" },
  ]);

  function handleAddNode(event: FormEvent) {
    event.preventDefault();
    if (newNode === "") return;

    let newItem = {
      id: auxNodes.length + 1,
      value: newNode,
      top: true,
    };
    setAuxNodes((prevNodes) => [newItem, ...prevNodes]);
    setNewNode("");
  }

  function handleStackRemove(e: any) {
    const arr = [...stackNodes];
    arr.shift();
    setStackNodes(arr);
  }

  function handleQeueRemove(e: any) {
    const arr = [...queueNodes];
    arr.pop();
    setQueueNodes(arr);
  }

  return (
    <div className="w-full h-screen flex flex-col items-center px-4 pt-52">
      <h1 className="font-bold text-4xl text-white mb-4">Tarefas</h1>

      <form className="w-full max-w-2xl mb-4 flex" onSubmit={handleAddNode}>
        <input
          type="text"
          placeholder="Digite o nome da tarefa..."
          className="flex-1 h-10 rounded-md px-2"
          value={newNode}
          onChange={(e: any) => setNewNode(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 ml-4 rounded-md px-4 text-white font-medium"
        >
          Fazer pedido
        </button>
      </form>

      <section className="flex w-full justify-around">
        <div>
          <h2>Pedidos</h2>
          <button onClick={handleQeueRemove}>Entregar pedido </button>
          <ul>
            {queueNodes.map((node: any) => (
              <StackNode key={node.id} value={node.value} />
            ))}
          </ul>
        </div>

        <div>
          <ul>
            {auxNodes.map((node: any) => (
              <StackNode key={node.id} value={node.value} />
            ))}
          </ul>
        </div>

        <div>
          <h2>Pedidos</h2>
          <button onClick={handleStackRemove}>Lavar louça</button>
          <ul>
            {stackNodes.map((node: any) => (
              <StackNode key={node.id} value={node.value} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Stack;
