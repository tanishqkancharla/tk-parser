import { line, Parser, prefix, str } from "teg-parser";

export type H2Token = {
	type: "h2";
	content: string;
};

export const h2Parser: Parser<H2Token> = prefix(str("## "), line)
	.withErrorScope("Heading 2")
	.map((content) => ({ type: "h2", content }));
