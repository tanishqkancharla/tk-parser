import { isParseSuccess } from "teg-parser";
import { assert, assertEqual } from "../assertUtils";
import { h1Parser } from "./h1";

describe("h1", () => {
	it("works", () => {
		const result = h1Parser.run("# h1 heading");

		assert.ok(isParseSuccess(result));
		assert.ok(result.stream.isEmpty);
		assertEqual(result.value.content, "h1 heading");
	});
});
