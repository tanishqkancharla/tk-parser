import {
	isParseFailure,
	logResult,
	maybe,
	Parser,
	sequence,
	zeroOrMore,
} from "teg-parser";
import { frontMatterParser } from "./blocks/frontmatter";
import { tkBlock, TKBlock } from "./TKBlock";

export { tkBlock, TKBlock };

export type TKMetadata = Record<string, string | string[]>;

export type TKDoc = {
	metadata: TKMetadata;
	blocks: TKBlock[];
};

export const tkParser: Parser<TKDoc> = sequence([
	maybe(frontMatterParser),
	zeroOrMore(tkBlock),
]).map(([frontMatterToken, blocks]) => ({
	metadata: frontMatterToken?.content || {},
	blocks,
}));

export function parseTK(contents: string): TKDoc {
	const result = tkParser.run(contents);

	if (isParseFailure(result)) {
		console.log(logResult(result));
		throw new Error(result.value);
	}

	return result.value;
}
