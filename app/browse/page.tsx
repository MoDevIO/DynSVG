import { Button } from "@/components/ui/button"

export default function BrowsePage() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Browse badges</h1>
          <p>Explore existing badges and adjust them to your use.</p>
          <Button className="mt-2">View catalog</Button>
        </div>
      </div>
    </div>
  )
}
