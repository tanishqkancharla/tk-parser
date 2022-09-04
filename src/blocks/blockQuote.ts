import { char, oneOrMore, Parser, prefix, str } from "teg-parser";
import { RichTextContent, richTextParser } from "./richText";

// | This
// | is a blockquote

export type BlockQuoteToken = {
	type: "blockquote";
	content: RichTextContent[];
};

export const blockquoteParser: Parser<BlockQuoteToken> = oneOrMore(
	prefix(str("| "), richTextParser),
	char("\n")
)
	.withErrorScope("Blockquote")
	.map((content) => ({ type: "blockquote", content }));
