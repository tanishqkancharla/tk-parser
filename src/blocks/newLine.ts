import { Parser, str } from "teg-parser";

export type NewLineToken = {
	type: "newLine";
};

export const newLineParser: Parser<NewLineToken> = str("\n").map((char) => ({
	type: "newLine",
}));
