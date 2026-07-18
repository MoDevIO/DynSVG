import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">DynSVG</h1>
          <p>Build and manage your Github badges here.</p>
          <Button className="mt-2">Get started</Button>
        </div>
      </div>
    </div>
  )
}
