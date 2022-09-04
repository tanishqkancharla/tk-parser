import { line, nOrMore, Parser, prefix, sequence, str } from "teg-parser";
import { newLine } from "./newLine";
import { RichTextContent, richTextParser } from "./richText";

// > Toggle
// | Content inside toggle
export type ToggleToken = {
	type: "toggle";
	label: string;
	content: RichTextContent[];
};

export const toggleParser: Parser<ToggleToken> = sequence([
	prefix(str("> "), line),
	newLine,
	nOrMore(1, prefix(str("| "), richTextParser)),
])
	.withErrorScope("Toggle")
	.map(([label, newLine, content]) => ({ type: "toggle", label, content }));
