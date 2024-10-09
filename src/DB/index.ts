import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { invoices } from "./schema";

const pool = new Pool({
  connectionString: process.env.XATA_DB_URL,
  max:20
})

export const db = drizzle(pool, {
  schema: {
    invoices
  }
})