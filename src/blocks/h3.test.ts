import { isParseSuccess } from "teg-parser";
import { assert, assertEqual } from "../assertUtils";
import { h3Parser } from "./h3";

describe("h3", () => {
	it("works", () => {
		const result = h3Parser.run("### h3 heading");
		assert.ok(isParseSuccess(result));

		assert.ok(result.stream.isEmpty);

		assertEqual(result.value.content, "h3 heading");
	});
});
