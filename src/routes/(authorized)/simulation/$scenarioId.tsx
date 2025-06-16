import { createFileRoute } from '@tanstack/react-router'
import { Simulation } from '@/components/Simulation'

export const Route = createFileRoute('/(authorized)/simulation/$scenarioId')({
  component: () => {
    const { scenarioId } = Route.useParams()
    // do something with the scenario id
    return <Simulation scenarioId={scenarioId} />
  },
})
