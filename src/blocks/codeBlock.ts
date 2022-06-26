import {
	line,
	maybe,
	Parser,
	prefix,
	sequence,
	str,
	takeUntilAfter,
} from "teg-parser";

export type CodeBlockToken = {
	type: "codeBlock";
	lang?: string;
	content: string;
};

export const langParser = prefix(str("```"), maybe(line)) //
	.map((lang) => (lang === "" ? undefined : lang));

function cleanContent(content: string): string {
	return content.replace(/\t/g, "    ");
}

export const codeBlockParser: Parser<CodeBlockToken> = sequence([
	langParser,
	takeUntilAfter(str("\n```\n")),
]) //
	.map(([lang, rawContent]) => ({
		type: "codeBlock",
		lang,
		content: cleanContent(rawContent),
	}));
