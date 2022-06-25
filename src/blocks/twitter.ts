import { Parser, prefix, str, takeUntilAfter } from "teg-parser";
import { TKBlock } from "../TKBlock";

declare module "../TKBlock" {
	interface TKBlockMap {
		tweet: { url: string };
	}
}

type TwitterToken = TKBlock<"tweet">;

export const tweetParser: Parser<TwitterToken> = prefix(
	str("[tweet:"),
	takeUntilAfter(str("]\n"))
) //
	.map((url) => ({ type: "tweet", url }));
