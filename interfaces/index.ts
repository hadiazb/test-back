export interface Configuration {
	app: { port: string | undefined; env: string | undefined };
	database: {
		dbName: string;
		dbUser: string;
		dbPassword: string;
		dbPort: string;
		dbHost: string;
	};
	auth: { secret: string | undefined };
}
