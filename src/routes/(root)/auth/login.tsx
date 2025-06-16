import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(root)/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(root)/auth/login"!</div>
}
