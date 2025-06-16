import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(authorized)/simulation")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
