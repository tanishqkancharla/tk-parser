import { Parser, sequence, str, takeUntilAfter } from "teg-parser";

// [bookmark:https://moonrise.tk]
export type BookmarkToken = {
	type: "bookmark";
	url: string;
};

export const bookmarkParser: Parser<BookmarkToken> = sequence([
	str("[bookmark:"),
	takeUntilAfter(str("]")),
])
	.withErrorScope("Bookmark")
	.map((seq) => seq[1])
	.map((url) => ({ type: "bookmark", url }));
