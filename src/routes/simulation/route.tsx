import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/simulation")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
