import { FormEvent, useState } from "react";
import { NodeElement } from "../interfaces/nodes.types.props";
import { NodeColumn } from "./NodeColumn";

function Stack() {
  const [newNode, setNewNode] = useState<string>("");
  const [auxNodes, setAuxNodes] = useState<Array<NodeElement>>([]);
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
    if (auxNodes.length === 0) return;
    const el = auxNodes[0];
    const arr = [...auxNodes];
    arr.shift();
    setAuxNodes(arr);
    setQueueNodes((prev) => [...prev, el]);
  }

  function handleStackRemove() {
    if (stackNodes.length === 0) return;
    const arr = [...stackNodes];
    arr.shift();
    setStackNodes(arr);
  }

  function handleSendToStack() {
    if (queueNodes.length === 0) return;
    const arr = [...queueNodes];
    const nodeToStack = arr[0];
    arr.shift();
    setQueueNodes(arr);
    setStackNodes((prev) => [nodeToStack, ...prev]);
  }

  return (
    <div className="w-full flex flex-col items-center justify-center h-[90vh]">
      <h2 className="text-primary text-3xl">Restaurante</h2>
      <form
        className="w-1/3 flex justify-around py-16"
        onSubmit={handleAddNode}
      >
        <input
          type="text"
          placeholder="Escreva seu pedido..."
          className="w-2/3 px- py-1 placeholder:italic rounded-sm border-b-2 border-primary focus:outline-none"
          value={newNode}
          onChange={(e: any) => setNewNode(e.target.value)}
        />
        <button
          type="submit"
          className="w-[25%] rounded-md bg-primary text-white "
        >
          Fazer pedido
        </button>
      </form>

      <section className="flex w-full justify-center items-center">
        <div className="w-1/3 flex flex-col items-center mx-10">
          <h2 className="text-2xl">Louça</h2>
          <NodeColumn items={stackNodes}></NodeColumn>
          <button onClick={handleStackRemove}>Lavar louça</button>
        </div>

        <div className="w-1/3 flex flex-col items-center mx-10">
          <h2 className="text-2xl">Cozinha</h2>
          <NodeColumn items={queueNodes}></NodeColumn>
          <button onClick={handleSendToStack}>Entregar pedido </button>
        </div>

        <div className="w-1/3 flex flex-col items-center mx-10">
          <h2 className="text-2xl">Garçom</h2>
          <NodeColumn items={auxNodes}></NodeColumn>
          <button onClick={handleSendToQeue}>Enviar pedido à cozinha</button>
        </div>
      </section>
    </div>
  );
}

export default Stack;
