import { zValidator } from "@hono/zod-validator";
import { desc, eq } from "drizzle-orm";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { db, isDatabaseConfigured } from "@/db";
import { categories, contacts, posts } from "@/db/schema";

// Honoアプリケーションの作成
const app = new Hono().basePath("/api");

// ヘルスチェック
app.get("/health", (c) => {
	return c.json({
		status: "ok",
		timestamp: new Date().toISOString(),
		database: isDatabaseConfigured() ? "configured" : "not configured",
	});
});

// ===== 投稿 API =====

// 投稿一覧取得
app.get("/posts", async (c) => {
	if (!db) {
		return c.json({ error: "Database not configured" }, 503);
	}

	const locale = c.req.query("locale") || "ja";
	const published = c.req.query("published") === "true";

	try {
		// ロケールと公開状態でフィルタリング
		const whereConditions = [eq(posts.locale, locale)];
		if (published) {
			whereConditions.push(eq(posts.published, true));
		}

		const result = await db
			.select()
			.from(posts)
			.where(whereConditions.length > 0 ? whereConditions[0] : undefined)
			.orderBy(desc(posts.createdAt));

		return c.json(result);
	} catch (error) {
		console.error("Error fetching posts:", error);
		return c.json({ error: "Failed to fetch posts" }, 500);
	}
});

// 投稿詳細取得
app.get("/posts/:id", async (c) => {
	if (!db) {
		return c.json({ error: "Database not configured" }, 503);
	}

	const id = parseInt(c.req.param("id"), 10);

	try {
		const result = await db.select().from(posts).where(eq(posts.id, id));

		if (result.length === 0) {
			return c.json({ error: "Post not found" }, 404);
		}

		return c.json(result[0]);
	} catch (error) {
		console.error("Error fetching post:", error);
		return c.json({ error: "Failed to fetch post" }, 500);
	}
});

// 投稿作成
const createPostSchema = z.object({
	title: z.string().min(1, "Title is required"),
	slug: z.string().min(1, "Slug is required"),
	content: z.string().min(1, "Content is required"),
	excerpt: z.string().optional(),
	locale: z.enum(["ja", "en"]).default("ja"),
	categoryId: z.number().optional(),
	published: z.boolean().default(false),
});

app.post("/posts", zValidator("json", createPostSchema), async (c) => {
	if (!db) {
		return c.json({ error: "Database not configured" }, 503);
	}

	const data = c.req.valid("json");

	try {
		const result = await db.insert(posts).values(data).returning();
		return c.json(result[0], 201);
	} catch (error) {
		console.error("Error creating post:", error);
		return c.json({ error: "Failed to create post" }, 500);
	}
});

// ===== カテゴリ API =====

// カテゴリ一覧取得
app.get("/categories", async (c) => {
	if (!db) {
		return c.json({ error: "Database not configured" }, 503);
	}

	const locale = c.req.query("locale") || "ja";

	try {
		const result = await db.select().from(categories).where(eq(categories.locale, locale));

		return c.json(result);
	} catch (error) {
		console.error("Error fetching categories:", error);
		return c.json({ error: "Failed to fetch categories" }, 500);
	}
});

// ===== お問い合わせ API =====

// お問い合わせ送信
const contactSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email address"),
	subject: z.string().min(1, "Subject is required"),
	message: z.string().min(1, "Message is required"),
});

app.post("/contact", zValidator("json", contactSchema), async (c) => {
	if (!db) {
		return c.json({ error: "Database not configured" }, 503);
	}

	const data = c.req.valid("json");

	try {
		const result = await db.insert(contacts).values(data).returning();
		return c.json(result[0], 201);
	} catch (error) {
		console.error("Error creating contact:", error);
		return c.json({ error: "Failed to send contact form" }, 500);
	}
});

// お問い合わせ一覧取得
app.get("/contacts", async (c) => {
	if (!db) {
		return c.json({ error: "Database not configured" }, 503);
	}

	try {
		const result = await db.select().from(contacts).orderBy(desc(contacts.createdAt));
		return c.json(result);
	} catch (error) {
		console.error("Error fetching contacts:", error);
		return c.json({ error: "Failed to fetch contacts" }, 500);
	}
});

// Next.js Route Handlersにエクスポート
export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);
