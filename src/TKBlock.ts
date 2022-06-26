import { oneOf, Parser } from "teg-parser";
import {
	blockLinkParser as blockLink,
	BlockLinkToken,
} from "./blocks/blockLink";
import { blockquoteParser, BlockQuoteToken } from "./blocks/blockQuote";
import { bookmarkParser, BookmarkToken } from "./blocks/bookmark";
import {
	codeBlockParser as codeBlock,
	CodeBlockToken,
} from "./blocks/codeBlock";
import { DateToken } from "./blocks/date";
import { dividerParser as divider, DividerToken } from "./blocks/divider";
import { FrontMatterToken } from "./blocks/frontmatter";
import { h1Parser as h1, H1Token } from "./blocks/h1";
import { h2Parser as h2, H2Token } from "./blocks/h2";
import { h3Parser as h3, H3Token } from "./blocks/h3";
import { imageParser, ImageToken } from "./blocks/image";
import { newLineParser as newLine, NewLineToken } from "./blocks/newLine";
import {
	paragraphParser as paragraph,
	ParagraphToken,
} from "./blocks/paragraph";
import { toggleParser, ToggleToken } from "./blocks/toggle";
import { tweetParser, TwitterToken } from "./blocks/twitter";
import {
	unorderedListParser as unorderedList,
	UnorderedListToken,
} from "./blocks/unorderedList";

export type TKBlock =
	| H1Token
	| H2Token
	| H3Token
	| ImageToken
	| ParagraphToken
	| BlockLinkToken
	| BookmarkToken
	| CodeBlockToken
	| DateToken
	| FrontMatterToken
	| NewLineToken
	| ToggleToken
	| TwitterToken
	| UnorderedListToken
	| DividerToken
	| BlockQuoteToken;

export const tkBlock: Parser<TKBlock> = oneOf([
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
