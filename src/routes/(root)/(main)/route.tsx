import { createFileRoute, Outlet } from "@tanstack/react-router";
import Navbar from "./-Navbar";

export const Route = createFileRoute("/(root)/(main)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
