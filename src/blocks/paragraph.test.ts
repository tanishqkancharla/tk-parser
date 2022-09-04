import { testParser } from "teg-parser/testParser";
import { paragraphParser } from "./paragraph";

describe("paragraph", () => {
	testParser("works", paragraphParser, "paragraph", {
		type: "paragraph",
		content: [
			{
				type: "plain",
				content: "paragraph",
			},
		],
	});
});
