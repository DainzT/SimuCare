import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_unknown')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_unknown"!</div>
}
