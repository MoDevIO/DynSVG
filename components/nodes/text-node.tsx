import { Handle, Position } from "@xyflow/react"

import { Card, CardContent } from "@/components/ui/card"

export function TextNode({
  data,
}: {
  data: {
    text: string
  }
}) {
  return (
      <Card className="p-2">
      <Handle
        type="target"
        position={Position.Left}
      />

      <CardContent>
        <p>{data.text}</p>
      </CardContent>

      <Handle
        type="source"
        position={Position.Right}
      />
    </Card>
  )
}
