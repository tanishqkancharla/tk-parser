import { Parser, prefix, str, takeUntilAfter } from "teg-parser";

export type TwitterToken = {
	type: "tweet";
	url: string;
};

export const tweetParser: Parser<TwitterToken> = prefix(
	str("[tweet:"),
	takeUntilAfter(str("]\n"))
) //
	.withErrorScope("Tweet")
	.map((url) => ({ type: "tweet", url }));
