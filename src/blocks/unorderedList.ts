import { line, maybe, nOrMore, Parser, prefix, str } from "teg-parser";

// Recursive types going on here, since list items can have their own internal
// unordered list
type ListItemContent = string | [string, UnorderedListToken];
type UnorderedListContent = ListItemContent[];

export type UnorderedListToken = {
	type: "unorderedList";
	listItems: UnorderedListContent;
};

export const indentedListItemParser = (
	indent: number
): Parser<ListItemContent> =>
	prefix(str(" ".repeat(indent) + "- "), line)
		.chain((firstContent) =>
			maybe(indentedUnorderedListParser(indent + 2)).map(
				(indentedList) => [firstContent, indentedList] as const
			)
		)
		.map(([firstContent, indentedList]) =>
			indentedList ? [firstContent, indentedList] : firstContent
		);

export const indentedUnorderedListParser = (
	indent: number
): Parser<UnorderedListToken> =>
	nOrMore(1, indentedListItemParser(indent)).map((listItems) => ({
		type: "unorderedList",
		listItems,
	}));

export const unorderedListParser: Parser<UnorderedListToken> =
	indentedUnorderedListParser(0);
