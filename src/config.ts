import * as dotenv from "dotenv";

dotenv.config();

export const CONFIG = {
	port: process.env.PORT ?? 3000,

	dbName: process.env.DB_NAME ?? "bookshop",

	dbUserName: process.env.DB_USERNAME ?? "postgres",

	dbPassword: process.env.DB_PASSWORD ?? "password",

	dbHost: process.env.DB_HOST ?? "localhost",

	dbPort: process.env.DB_PORT ?? "5432",

	dbDialect: process.env.DB_DIALECT ?? "postgres",
} as const;
