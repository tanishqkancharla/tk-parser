import { Parser } from "teg-parser";
import { TKBlock } from "../TKBlock";
import { RichTextContent, richTextParser } from "./richText";

declare module "../TKBlock" {
	interface TKBlockMap {
		paragraph: { content: RichTextContent };
	}
}

export type ParagraphToken = {
	type: "paragraph";
	content: RichTextContent;
};

export const paragraphParser: Parser<ParagraphToken> = richTextParser
	.withErrorScope("Paragraph")
	.map((content) => ({
		type: "paragraph",
		content,
	}));
