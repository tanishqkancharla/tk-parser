import { Parser, str } from "teg-parser";

export type NewLineToken = {
	type: "newLine";
};

export const newLine: Parser<NewLineToken> = str("\n")
	.withErrorScope("Newline")
	.map((char) => ({
		type: "newLine",
	}));
