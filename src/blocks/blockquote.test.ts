import { testParser } from "teg-parser/testParser";
import { blockquoteParser } from "./blockQuote";

describe("blockQuote", () => {
	testParser(
		"works",
		blockquoteParser,
		`| *bold*
| text`,
		{
			type: "blockquote",
			content: [
				[{ type: "bold", content: "bold" }],
				[{ type: "plain", content: "text" }],
			],
		}
	);
});
