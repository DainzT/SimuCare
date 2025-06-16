import { createFileRoute } from '@tanstack/react-router'
import { ScenarioLibrary } from '@/components/ScenarioLibrary'

export const Route = createFileRoute('/(authorized)/scenarios')({
  component: ScenarioLibrary,
})
