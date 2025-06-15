import { createFileRoute } from '@tanstack/react-router'
import { ScenarioLibrary } from '../components/ScenarioLibrary'

export const Route = createFileRoute('/scenarios')({
  component: ScenariosPage,
})

function ScenariosPage() {
  return <ScenarioLibrary />
}