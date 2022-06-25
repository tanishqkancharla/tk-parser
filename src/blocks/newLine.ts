import { Parser, str } from "teg-parser";
import { TKBlock } from "../TKBlock";

declare module "../TKBlock" {
	interface TKBlockMap {
		newLine: {};
	}
}

type NewLineToken = TKBlock<"newLine">;

export const newLineParser: Parser<NewLineToken> = str("\n").map((char) => ({
	type: "newLine",
}));
