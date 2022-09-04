import type { Config } from "jest";

// Sync object
const config: Config = {
	preset: "ts-jest",
	testEnvironment: "node",
	globals: {
		"ts-jest": {
			useESM: true,
		},
	},
	verbose: true,
};
export default config;
