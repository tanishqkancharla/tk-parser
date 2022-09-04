import { testParser } from "teg-parser/testParser";
import { toggleParser } from "./toggle";

describe("toggle", () => {
	testParser("works", toggleParser, `> Toggle\n| Content`, {
		type: "toggle",
		label: "Toggle",
		content: [[{ type: "plain", content: "Content" }]],
	});
});
