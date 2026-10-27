import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Label, TextInput, useDesk } from "@/components/desk";
import { loadEditorCategories, removeCategory, saveCategory } from "@/lib/cms";
import { slugify } from "@/lib/content-types";

export const Route = createFileRoute("/admin/categories")({ component: CategoriesPage });

function CategoriesPage() {
  const state = useDesk("categories", () => loadEditorCategories());
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  if (state.loading) return <p className="text-sm text-muted">Loading categories…</p>;
  if (state.error) return <p className="text-oxblood">{state.error}</p>;
  return (
    <div>
      <h1 className="display text-4xl">Categories</h1>
      <ul className="mt-6 divide-y divide-line">
        {(state.data ?? []).map((category) => (
          <li key={category.id} className="flex items-start justify-between gap-4 py-3">
            <div>
              <p>{category.name}</p>
              <p className="text-sm text-muted">{category.description}</p>
            </div>
            <button type="button" className="text-sm text-oxblood" onClick={() => void removeCategory({ data: category.id }).then(() => state.reload())}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <form
        className="mt-8 max-w-lg space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
          void saveCategory({ data: { name, slug: slugify(name), description } })
            .then((result) => {
              if (!result.ok) return setMessage(result.message);
              setName("");
              setDescription("");
              setMessage("Added.");
              state.reload();
            })
            .catch((reason: unknown) => setMessage(reason instanceof Error ? reason.message : "Could not add."));
        }}
      >
        <h2 className="display text-2xl">Add a category</h2>
        <div><Label htmlFor="name">Name</Label><TextInput id="name" value={name} onChange={(event) => setName(event.target.value)} /></div>
        <div><Label htmlFor="description">Description</Label><TextInput id="description" value={description} onChange={(event) => setDescription(event.target.value)} /></div>
        <button type="submit" className="h-11 bg-oxblood px-4 text-sm font-semibold text-paper">Add</button>
        {message ? <p role="status" className="text-sm">{message}</p> : null}
      </form>
    </div>
  );
}
