import { createFileRoute } from '@tanstack/react-router'
import { Progress } from '../components/Progress'

export const Route = createFileRoute('/progress')({
  component: ProgressPage,
})

function ProgressPage() {
  return <Progress />
}