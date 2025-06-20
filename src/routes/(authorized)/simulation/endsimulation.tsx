import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const getRandomText = createServerFn({
  method: "GET",
}).handler(() => {
  // const allSimulations = supabase.from('simulations').select('*');

  return "Random text";
});

export const Route = createFileRoute("/(authorized)/simulation/endsimulation")({
  component: RouteComponent,
  beforeLoad: async () => {
    // You can add any pre-load logic here, such as authentication checks
    console.log("Loading /simulation/endsimulation route");
  },
  loader: () => {
    return getRandomText();
  },
});

function RouteComponent() {
  const randomText = Route.useLoaderData();
  console.log("Random text:", randomText);
  return <div>Hello "/(authorized)/simulation/endsimulation"!</div>;
}
