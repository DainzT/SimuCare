import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(root)/auth/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(root)/auth/signup"!</div>
}
