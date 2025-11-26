import { boolean, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

/**
 * ユーザーテーブル
 */
export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/**
 * カテゴリテーブル
 */
export const categories = pgTable("categories", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	slug: text("slug").notNull().unique(),
	locale: text("locale").notNull().default("ja"), // 多言語対応
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/**
 * 投稿テーブル
 */
export const posts = pgTable("posts", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	slug: text("slug").notNull(),
	content: text("content").notNull(),
	excerpt: text("excerpt"),
	locale: text("locale").notNull().default("ja"), // 多言語対応
	categoryId: integer("category_id").references(() => categories.id),
	authorId: integer("author_id").references(() => users.id),
	published: boolean("published").default(false),
	publishedAt: timestamp("published_at"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/**
 * お問い合わせテーブル
 */
export const contacts = pgTable("contacts", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	subject: text("subject").notNull(),
	message: text("message").notNull(),
	status: text("status").notNull().default("pending"), // pending, replied, closed
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 型定義
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type Category = typeof categories.$inferSelect;
export type NewCategory = typeof categories.$inferInsert;

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;

export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;
