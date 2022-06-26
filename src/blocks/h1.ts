import { line, Parser, prefix, str } from "teg-parser";

export type H1Token = {
	type: "h1";
	content: string;
};

export const h1Parser: Parser<H1Token> = prefix(str("# "), line).map(
	(content) => ({ type: "h1", content })
);
