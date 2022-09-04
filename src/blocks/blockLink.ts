import { Parser, sequence, str, takeUntilAfter } from "teg-parser";

// [Gem](https://moonrise.tk)
export type BlockLinkToken = {
	type: "blockLink";
	content: string;
	href: string;
};

export const blockLinkParser: Parser<BlockLinkToken> = sequence([
	str("["),
	takeUntilAfter(str("]")),
	str("("),
	takeUntilAfter(str(")")),
])
	.withErrorScope("Blocklink")
	.map((seq) => [seq[1], seq[3]])
	.map(([content, href]) => ({ type: "blockLink", content, href }));
