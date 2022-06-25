import {
	between,
	maybe,
	not,
	oneOf,
	Parser,
	sequence,
	str,
	zeroOrMore,
} from "teg-parser";
import { TKBlock } from "../TKBlock";
import { concat, strWithoutChars } from "./parseUtils";

type FrontMatterValue = string | string[];

declare module "../TKBlock" {
	interface TKBlockMap {
		frontmatter: { content: Record<string, FrontMatterValue> };
	}
}

type FrontMatterToken = TKBlock<"frontmatter">;

const frontMatterStringValueParser = strWithoutChars(["\n", ","]);

const frontMatterArrayValueParser = between(
	str("["),
	zeroOrMore(
		strWithoutChars(["\n", ",", "]"]),
		sequence([str(","), maybe(str(" "))])
	),
	str("]")
);

const frontMatterValueParser = oneOf([
	frontMatterArrayValueParser,
	frontMatterStringValueParser,
]);

const frontMatterKeyParser = zeroOrMore(not(oneOf([str(":"), str("\n")]))).map(
	concat
);

const frontMatterDeclParser = sequence([
	frontMatterKeyParser,
	str(": "),
	frontMatterValueParser,
	str("\n"),
]).map(([key, _, value]) => [key, value] as const);

export const frontMatterParser: Parser<FrontMatterToken> = between(
	str("---\n"),
	zeroOrMore(frontMatterDeclParser),
	str("---\n")
).map((keyValuePairs) => {
	const content: Record<string, FrontMatterValue> = {};

	for (const keyValuePair of keyValuePairs) {
		const [key, value] = keyValuePair;
		content[key] = value;
	}

	return { type: "frontmatter", content };
});
