import { line, nOrMore, Parser, prefix, sequence, str } from "teg-parser";
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

	nOrMore(1, prefix(str("| "), richTextParser)),
]).map(([label, content]) => ({ type: "toggle", label, content }));
