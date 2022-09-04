import {
	between,
	maybe,
	not,
	oneOrMore,
	Parser,
	sequence,
	str,
	takeUntilAfter,
} from "teg-parser";
import { concat } from "./utils";

// [image:/path/to/image.png](Image Caption)
export type ImageToken = {
	type: "image";
	url: string;
	caption?: string;
};

export const imageParser: Parser<ImageToken> = sequence([
	str("[image:"),
	takeUntilAfter(str("]")),
	// Caption
	maybe(between(str("("), oneOrMore(not(str(")"))), str(")"))),
])
	.withErrorScope("Image")
	.map((seq) => [seq[1], seq[2] ? concat(seq[2]) : undefined] as const)
	.map(([url, caption]) => ({ type: "image", url, caption }));
