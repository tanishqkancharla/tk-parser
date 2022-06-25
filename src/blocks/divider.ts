import { Parser, str } from "teg-parser";
import { TKBlock } from "../TKBlock";

declare module "../TKBlock" {
	interface TKBlockMap {
		divider: {};
	}
}

type DividerToken = TKBlock<"divider">;

export const dividerParser: Parser<DividerToken> = str("---\n").map(() => ({
	type: "divider",
}));
