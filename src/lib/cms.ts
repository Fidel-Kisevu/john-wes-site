import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";

async function core() {
  return import("./cms-core");
}

function idOrNull(value: unknown): number | null {
  if (value == null || value === "" || value === "new") return null;
  const id = typeof value === "number" ? value : Number(value);
  if (!Number.isInteger(id) || id <= 0) throw new Error("That record could not be found.");
  return id;
}

export const loadSettings = createServerFn({ method: "GET" }).handler(async () => {
  const { readSettings } = await core();
  return readSettings();
});

export const loadHome = createServerFn({ method: "GET" }).handler(async () => {
  const { readHome } = await core();
  return readHome();
});

export const loadArticles = createServerFn({ method: "GET" })
  .validator((category: unknown) => (typeof category === "string" ? category.slice(0, 80) : ""))
  .handler(async ({ data }) => {
    const { readArticles } = await core();
    return readArticles(data);
  });

export const loadArticle = createServerFn({ method: "GET" })
  .validator((slug: unknown) => {
    if (typeof slug !== "string" || !/^[a-z0-9-]+$/.test(slug)) throw new Error("Not found");
    return slug;
  })
  .handler(async ({ data }) => {
    const { readArticle } = await core();
    return readArticle(data);
  });

export const loadBooks = createServerFn({ method: "GET" }).handler(async () => {
  const { readBooks } = await core();
  return readBooks();
});

export const loadBook = createServerFn({ method: "GET" })
  .validator((slug: unknown) => {
    if (typeof slug !== "string" || !/^[a-z0-9-]+$/.test(slug)) throw new Error("Not found");
    return slug;
  })
  .handler(async ({ data }) => {
    const { readBook } = await core();
    return readBook(data);
  });

export const loadMessages = createServerFn({ method: "GET" })
  .validator((series: unknown) => (typeof series === "string" ? series.slice(0, 80) : ""))
  .handler(async ({ data }) => {
    const { readMessages } = await core();
    return readMessages(data);
  });

export const loadMessage = createServerFn({ method: "GET" })
  .validator((slug: unknown) => {
    if (typeof slug !== "string" || !/^[a-z0-9-]+$/.test(slug)) throw new Error("Not found");
    return slug;
  })
  .handler(async ({ data }) => {
    const { readMessage } = await core();
    return readMessage(data);
  });

export const loadEvents = createServerFn({ method: "GET" }).handler(async () => {
  const { readEvents } = await core();
  return readEvents();
});

export const loadSearch = createServerFn({ method: "GET" })
  .validator((query: unknown) => (typeof query === "string" ? query.slice(0, 120) : ""))
  .handler(async ({ data }) => {
    const { readSearch } = await core();
    return readSearch(data);
  });

export const loadSitemap = createServerFn({ method: "GET" }).handler(async () => {
  const { readSitemap } = await core();
  return readSitemap();
});

export const sendContact = createServerFn({ method: "POST" })
  .validator((input: unknown) => input)
  .handler(async ({ data }) => {
    const { submitContact } = await core();
    return submitContact(data);
  });

export const joinNotes = createServerFn({ method: "POST" })
  .validator((input: unknown) => input)
  .handler(async ({ data }) => {
    const { subscribeNewsletter } = await core();
    return subscribeNewsletter(data);
  });

export const loadOverview = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const { editorOverview } = await core();
    return editorOverview(context.userId);
  });

export const loadEditorArticles = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const { editorArticles } = await core();
    return editorArticles(context.userId);
  });

export const loadEditorArticle = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .validator((id: unknown) => idOrNull(id))
  .handler(async ({ data, context }) => {
    const { editorArticle } = await core();
    return editorArticle(context.userId, data);
  });

export const saveArticle = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown) => input)
  .handler(async ({ data, context }) => {
    const { saveArticleRecord } = await core();
    return saveArticleRecord(context.userId, data);
  });

export const removeArticle = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: unknown) => {
    const parsed = idOrNull(id);
    if (parsed == null) throw new Error("That essay could not be found.");
    return parsed;
  })
  .handler(async ({ data, context }) => {
    const { deleteArticleRecord } = await core();
    return deleteArticleRecord(context.userId, data);
  });

export const loadEditorBooks = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const { editorBooks } = await core();
    return editorBooks(context.userId);
  });

export const loadEditorBook = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .validator((id: unknown) => idOrNull(id))
  .handler(async ({ data, context }) => {
    const { editorBook } = await core();
    return editorBook(context.userId, data);
  });

export const saveBook = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown) => input)
  .handler(async ({ data, context }) => {
    const { saveBookRecord } = await core();
    return saveBookRecord(context.userId, data);
  });

export const removeBook = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: unknown) => {
    const parsed = idOrNull(id);
    if (parsed == null) throw new Error("That book could not be found.");
    return parsed;
  })
  .handler(async ({ data, context }) => {
    const { deleteBookRecord } = await core();
    return deleteBookRecord(context.userId, data);
  });

export const loadEditorMessages = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const { editorMessages } = await core();
    return editorMessages(context.userId);
  });

export const loadEditorMessage = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .validator((id: unknown) => idOrNull(id))
  .handler(async ({ data, context }) => {
    const { editorMessage } = await core();
    return editorMessage(context.userId, data);
  });

export const saveMessage = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown) => input)
  .handler(async ({ data, context }) => {
    const { saveMessageRecord } = await core();
    return saveMessageRecord(context.userId, data);
  });

export const removeMessage = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: unknown) => {
    const parsed = idOrNull(id);
    if (parsed == null) throw new Error("That message could not be found.");
    return parsed;
  })
  .handler(async ({ data, context }) => {
    const { deleteMessageRecord } = await core();
    return deleteMessageRecord(context.userId, data);
  });

export const loadEditorEvents = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const { editorEvents } = await core();
    return editorEvents(context.userId);
  });

export const loadEditorEvent = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .validator((id: unknown) => idOrNull(id))
  .handler(async ({ data, context }) => {
    const { editorEvent } = await core();
    return editorEvent(context.userId, data);
  });

export const saveEvent = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown) => input)
  .handler(async ({ data, context }) => {
    const { saveEventRecord } = await core();
    return saveEventRecord(context.userId, data);
  });

export const removeEvent = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: unknown) => {
    const parsed = idOrNull(id);
    if (parsed == null) throw new Error("That event could not be found.");
    return parsed;
  })
  .handler(async ({ data, context }) => {
    const { deleteEventRecord } = await core();
    return deleteEventRecord(context.userId, data);
  });

export const loadEditorCategories = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const { editorCategories } = await core();
    return editorCategories(context.userId);
  });

export const saveCategory = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown) => input)
  .handler(async ({ data, context }) => {
    const { saveCategoryRecord } = await core();
    return saveCategoryRecord(context.userId, data);
  });

export const removeCategory = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: unknown) => {
    const parsed = idOrNull(id);
    if (parsed == null) throw new Error("That category could not be found.");
    return parsed;
  })
  .handler(async ({ data, context }) => {
    const { deleteCategoryRecord } = await core();
    return deleteCategoryRecord(context.userId, data);
  });

export const loadEditorMedia = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const { editorMedia } = await core();
    return editorMedia(context.userId);
  });

export const saveMedia = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown) => input)
  .handler(async ({ data, context }) => {
    const { saveMediaRecord } = await core();
    return saveMediaRecord(context.userId, data);
  });

export const removeMedia = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: unknown) => {
    const parsed = idOrNull(id);
    if (parsed == null) throw new Error("That image could not be found.");
    return parsed;
  })
  .handler(async ({ data, context }) => {
    const { deleteMediaRecord } = await core();
    return deleteMediaRecord(context.userId, data);
  });

export const saveSettings = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((input: unknown) => input)
  .handler(async ({ data, context }) => {
    const { saveSettingsRecord } = await core();
    return saveSettingsRecord(context.userId, data);
  });

export const loadEnquiries = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const { editorEnquiries, editorNewsletter } = await core();
    const enquiries = await editorEnquiries(context.userId);
    const notes = await editorNewsletter(context.userId);
    return { enquiries, notes };
  });

export const loadPreview = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .validator((input: unknown) => {
    const value = (input ?? {}) as { kind?: unknown; id?: unknown };
    const kind = value.kind === "book" || value.kind === "message" || value.kind === "article" ? value.kind : null;
    const id = idOrNull(value.id);
    if (!kind || id == null) throw new Error("That preview could not be found.");
    return { kind, id };
  })
  .handler(async ({ data, context }) => {
    const { previewRecord } = await core();
    return previewRecord(context.userId, data.kind, data.id);
  });
