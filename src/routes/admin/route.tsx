import { createFileRoute } from "@tanstack/react-router";
import { DeskFrame } from "@/components/desk";

export const Route = createFileRoute("/admin")({
  component: DeskFrame,
});
