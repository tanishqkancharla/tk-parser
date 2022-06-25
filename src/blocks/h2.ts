import { line, Parser, prefix, str } from "teg-parser";
import { TKBlock } from "../TKBlock";

declare module "../TKBlock" {
	interface TKBlockMap {
		h2: { content: string };
	}
}

type H2Token = TKBlock<"h2">;

export const h2Parser: Parser<H2Token> = prefix(str("## "), line).map(
	(content) => ({ type: "h2", content })
);
