import { testParser } from "teg-parser/testParser";
import { blockLinkParser } from "./blockLink";

describe("blockLink", () => {
	testParser("works", blockLinkParser, `[Gem](https://gem.moonrise.tk)`, {
		type: "blockLink",
		content: "Gem",
		href: "https://gem.moonrise.tk",
	});
});
