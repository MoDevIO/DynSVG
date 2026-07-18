"use client"

import { useState, useCallback } from "react"
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react"

import { nodeTypes } from "@/components/nodes/nodes"

const initialNodes = [
  { id: "n1", position: { x: 0, y: 100 }, type: "TextNode", data: { text:  "1" } },
  { id: "n2", position: { x: 0, y: 200 }, type: "TextNode", data: { text:  "22" } },
  { id: "n3", position: { x: 0, y: 300 }, type: "TextNode", data: { text:  "333" } },
  { id: "n4", position: { x: 0, y: 400 }, type: "TextNode", data: { text:  "4444" } },
  { id: "n5", position: { x: 0, y: 500 }, type: "TextNode", data: { text:  "55555" } },
]
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }]

export default function CreatePage() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback(
    (changes: any) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  )
  const onEdgesChange = useCallback(
    (changes: any) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  )
  const onConnect = useCallback(
    (params: any) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  )

  return (
    <div className="h-full p-6">
      <div className="h-full w-full overflow-hidden rounded-lg border border-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          colorMode="dark"
        >
        </ReactFlow>
      </div>
    </div>
  )
}
