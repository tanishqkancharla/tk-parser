import { Parser, sequence, str, takeUntilAfter } from "teg-parser";
import { TKBlock } from "../TKBlock";

// [Gem](https://moonrise.tk)
const blockType = "blockLink";

declare module "../TKBlock" {
	interface TKBlockMap {
		[blockType]: { content: string; href: string };
	}
}

type BlockLinkToken = TKBlock<typeof blockType>;

export const blockLinkParser: Parser<BlockLinkToken> = sequence([
	str("["),
	takeUntilAfter(str("]")),
	str("("),
	takeUntilAfter(str(")")),
	str("\n"),
])
	.map((seq) => [seq[1], seq[3]])
	.map(([content, href]) => ({ type: "blockLink", content, href }));
