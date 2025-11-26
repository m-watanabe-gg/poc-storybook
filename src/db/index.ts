import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// データベース接続URLを環境変数から取得
const connectionString = process.env.DATABASE_URL || "";

// 開発環境では空の場合はダミーURLを使用（実際の接続は行わない）
const sql = connectionString ? neon(connectionString) : null;

// Drizzle ORMインスタンス
export const db = sql ? drizzle(sql, { schema }) : null;

// データベースが設定されているかチェック
export function isDatabaseConfigured(): boolean {
	return !!connectionString;
}
