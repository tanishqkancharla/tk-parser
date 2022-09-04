import {
	between,
	char,
	line,
	maybe,
	Parser,
	sequence,
	str,
	takeUpTo,
} from "teg-parser";

export type CodeBlockToken = {
	type: "codeBlock";
	lang?: string;
	content: string;
};

export const langParser = between(str("```"), maybe(line), char("\n"))
	.withErrorScope("Lang")
	.map((lang) => (lang === "" ? undefined : lang));

function cleanContent(content: string): string {
	return content.replace(/\t/g, "    ");
}

export const codeBlockParser: Parser<CodeBlockToken> = sequence([
	langParser,
	takeUpTo(str("\n```")),
	str("\n```"),
]) //
	.withErrorScope("Code Block")
	.map(([lang, rawContent]) => ({
		type: "codeBlock",
		lang,
		content: cleanContent(rawContent),
	}));
