import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";

export const Route = createFileRoute("/(authorized)/dashboard")({
  component: Layout,
});

function Layout() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}
