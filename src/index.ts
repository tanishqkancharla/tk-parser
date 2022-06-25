import {
	isParseFailure,
	logResult,
	maybe,
	oneOf,
	Parser,
	sequence,
	zeroOrMore,
} from "teg-parser";
import { blockLinkParser as blockLink } from "./blocks/blockLink";
import { blockquoteParser } from "./blocks/blockQuote";
import { bookmarkParser } from "./blocks/bookmark";
import { codeBlockParser as codeBlock } from "./blocks/codeBlock";
import { dividerParser as divider } from "./blocks/divider";
import { frontMatterParser } from "./blocks/frontmatter";
import { h1Parser as h1 } from "./blocks/h1";
import { h2Parser as h2 } from "./blocks/h2";
import { h3Parser as h3 } from "./blocks/h3";
import { imageParser } from "./blocks/image";
import { newLineParser as newLine } from "./blocks/newLine";
import { paragraphParser as paragraph } from "./blocks/paragraph";
import { toggleParser } from "./blocks/toggle";
import { tweetParser } from "./blocks/twitter";
import { unorderedListParser as unorderedList } from "./blocks/unorderedList";
import { TKBlock } from "./TKBlock";

export const block: Parser<TKBlock> = oneOf([
	h1,
	h2,
	h3,
	unorderedList,
	divider,
	tweetParser,
	codeBlock,
	blockquoteParser,
	imageParser,
	blockLink,
	toggleParser,
	bookmarkParser,
	newLine,
	paragraph,
]);

export type TKMetadata = Record<string, string | string[]>;

export type TKDoc = {
	metadata: TKMetadata;
	blocks: TKBlock[];
};

export const tkParser: Parser<TKDoc> = sequence([
	maybe(frontMatterParser),
	zeroOrMore(block),
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
