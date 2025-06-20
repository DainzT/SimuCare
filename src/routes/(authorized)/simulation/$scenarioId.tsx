import { createFileRoute } from "@tanstack/react-router";
import { Simulation } from "@/components/Simulation";

export const Route = createFileRoute("/(authorized)/simulation/$scenarioId")({
  component: SimulationPage,
});

function SimulationPage() {
  const { scenarioId } = Route.useParams();
  return <Simulation scenarioId={scenarioId} />;
}
