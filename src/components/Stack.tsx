import { FormEvent, useState } from "react";
import { NodeElement } from "../interfaces/nodes.types.props";
import { NodeColumn } from "./NodeColumn";

function Stack() {
  const [newNode, setNewNode] = useState<string>("");
  const [auxNodes, setAuxNodes] = useState<Array<NodeElement>>([
    { node: { id: 1, value: "valor" } },
  ]);
  const [stackNodes, setStackNodes] = useState<Array<NodeElement>>([
    { node: { id: 1, value: "valor" } },
  ]);
  const [queueNodes, setQueueNodes] = useState<Array<NodeElement>>([
    { node: { id: 1, value: "valor" } },
  ]);
  function handleAddNode(event: FormEvent) {
    event.preventDefault();
    if (newNode === "") return;

    let newItem = {
      node: {
        id: auxNodes.length + 1,
        value: newNode,
      },
    };
    setAuxNodes((prevNodes) => [newItem, ...prevNodes]);
    setNewNode("");
  }

  function handleSendToQeue() {
    const el = queueNodes[queueNodes.length - 1];
    const arr = [...auxNodes];
    arr.shift();
    console.log(arr);
    setAuxNodes(arr);
    setQueueNodes((prev) => [...prev, el]);
  }

  function handleStackRemove() {
    const arr = [...stackNodes];
    arr.shift();
    setStackNodes(arr);
  }

  function handleSendToStack() {
    const arr = [...queueNodes];
    const nodeToStack = arr[arr.length - 1];
    arr.pop();
    setQueueNodes(arr);
    setStackNodes((prev) => [nodeToStack, ...prev]);
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
          <NodeColumn items={stackNodes}></NodeColumn>
          <button onClick={handleStackRemove}>Lavar louça</button>
        </div>

        <div>
          <h2>Pedidos</h2>
          <NodeColumn items={queueNodes}></NodeColumn>
          <button onClick={handleSendToStack}>Entregar pedido </button>
        </div>

        <div>
          <h2>Garçom</h2>
          <NodeColumn items={auxNodes}></NodeColumn>
          <button onClick={handleSendToQeue}>Enviar pedido à cozinha</button>
        </div>
      </section>
    </div>
  );
}

export default Stack;
