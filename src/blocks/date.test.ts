import { isParseSuccess } from "teg-parser";
import { assert, assertEqual } from "../assertUtils";
import { dateParser } from "./date";

describe("Date", () => {
	it("works", () => {
		const result = dateParser.run("2021-07\n");

		assert.ok(isParseSuccess(result));
		assert.ok(result.stream.isEmpty);
		assertEqual(result.value, { content: new Date("2021-07"), type: "date" });
	});
});
