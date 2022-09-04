import { testParser } from "teg-parser/testParser";
import { dateParser } from "./date";

describe("Date", () => {
	testParser("works", dateParser, "2021-07", {
		content: new Date("2021-07"),
		type: "date",
	});
});
