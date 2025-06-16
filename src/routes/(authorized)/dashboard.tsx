import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/Dashboard";

export const Route = createFileRoute("/(authorized)/dashboard")({
  component: Dashboard,
});
