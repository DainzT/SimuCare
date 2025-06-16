import { Navigation } from "@/components/Navigation";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(root)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}
