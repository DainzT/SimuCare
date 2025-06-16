import { Dashboard } from "@/components/Dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(authorized)/dashboard/")({
  component: Dashboard,
});
