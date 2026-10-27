import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/media/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const id = Number(params.id);
        if (!Number.isInteger(id) || id <= 0) return new Response("Not found", { status: 404 });
        const { readMediaFile } = await import("@/lib/cms-core");
        const file = await readMediaFile(id);
        if (!file) return new Response("Not found", { status: 404 });
        const binary = Uint8Array.from(atob(file.bytes_base64), (char) => char.charCodeAt(0));
        return new Response(binary, {
          headers: {
            "Content-Type": file.mime,
            "Cache-Control": "public, max-age=86400",
            "X-Content-Type-Options": "nosniff",
          },
        });
      },
    },
  },
});
