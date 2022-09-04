import { line, Parser, prefix, str } from "teg-parser";

export type H3Token = {
	type: "h3";
	content: string;
};

export const h3Parser: Parser<H3Token> = prefix(str("### "), line)
	.withErrorScope("Heading 3")
	.map((content) => ({ type: "h3", content }));
