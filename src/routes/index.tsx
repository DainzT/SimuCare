import { createFileRoute } from '@tanstack/react-router'
import { Dashboard } from '../components/Dashboard'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return <Dashboard />
}