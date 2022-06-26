import { nOrMore, Parser, prefix, str } from "teg-parser";
import { RichTextContent, richTextParser } from "./richText";

// | This
// | is a blockquote

export type BlockQuoteToken = {
	type: "blockquote";
	content: RichTextContent[];
};

export const blockquoteParser: Parser<BlockQuoteToken> = nOrMore(
	1,
	prefix(str("| "), richTextParser)
).map((content) => ({ type: "blockquote", content }));
