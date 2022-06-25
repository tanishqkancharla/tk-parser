import { nOrMore, Parser, prefix, str } from "teg-parser";
import { TKBlock } from "../TKBlock";
import { RichTextContent, richTextParser } from "./richText";

// | This
// | is a blockquote
const blockType = "blockquote";

declare module "../TKBlock" {
	interface TKBlockMap {
		[blockType]: { content: RichTextContent[] };
	}
}

type BlockQuoteToken = TKBlock<typeof blockType>;

export const blockquoteParser: Parser<BlockQuoteToken> = nOrMore(
	1,
	prefix(str("| "), richTextParser)
).map((content) => ({ type: "blockquote", content }));
