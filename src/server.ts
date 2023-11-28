import { app } from "./app";
import { populateDummyData } from "./database/database_seed";
import { CONFIG } from "./config";

const environment = process.env.NODE_ENV || "dev";

console.log(`🌍 Running in ${environment} environment`);

app.listen(CONFIG.port, () => {
	console.log(`🚂 Express started on port ${CONFIG.port}`);

	// Seed the database with some data
	if (environment === "dev") {
		populateDummyData();
	}
});
