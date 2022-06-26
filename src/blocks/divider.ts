import { Parser, str } from "teg-parser";

export type DividerToken = {
	type: "divider";
};

export const dividerParser: Parser<DividerToken> = str("---\n").map(() => ({
	type: "divider",
}));
