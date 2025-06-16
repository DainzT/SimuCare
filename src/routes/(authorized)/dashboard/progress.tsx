import { createFileRoute } from '@tanstack/react-router'
import { Progress } from '@/components/Progress'

export const Route = createFileRoute('/(authorized)/dashboard/progress')({
  component: Progress,
})
