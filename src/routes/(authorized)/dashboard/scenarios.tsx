import { createFileRoute } from '@tanstack/react-router'
import { ScenarioLibrary } from '@/components/ScenarioLibrary'

export const Route = createFileRoute('/(authorized)/dashboard/scenarios')({
  component: ScenarioLibrary,
})
