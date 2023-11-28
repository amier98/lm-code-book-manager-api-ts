import { Dialect, Sequelize } from "sequelize";
import { CONFIG } from "../config";

const connString = `${CONFIG.dbDialect}://${CONFIG.dbUserName}:${CONFIG.dbPassword}@${CONFIG.dbHost}:${CONFIG.dbPort}/${CONFIG.dbName}`;

// TODO: This should be external config
export let sequelize = new Sequelize(connString);

if (process.env.NODE_ENV !== "test") {
	sequelize = new Sequelize(
		process.env.DB_NAME ?? "MISSING_DB_NAME_CONFIG",
		process.env.DB_USERNAME ?? "MISSING_DB_USERNAME",
		process.env.DB_PASSWORD ?? "MISSING_DB_PASSWORD",
		{
			host: process.env.DB_HOST ?? "MISSING_DB_HOST",
			port: parseInt(process.env.DB_PORT as string) ?? "MISSING_DB_PORT",
			dialect: (process.env.DB_DIALECT as Dialect) ?? "postgres",
		}
	);
}
