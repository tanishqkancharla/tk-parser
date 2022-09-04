import { testParser } from "teg-parser/testParser";
import { bookmarkParser } from "./bookmark";

describe("bookmark", () => {
	testParser("bookmark", bookmarkParser, `[bookmark:https://gem.moonrise.tk]`, {
		type: "bookmark",
		url: "https://gem.moonrise.tk",
	});
});
