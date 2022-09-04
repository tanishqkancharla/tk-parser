import { isParseSuccess } from "teg-parser";
import { assert } from "../assertUtils";
import { newLine } from "./newLine";

describe("newLine", () => {
	it("works", () => {
		const result = newLine.run(`\n`);

		assert.ok(isParseSuccess(result));
		assert.ok(result.stream.isEmpty);
	});

	it("works when there's content after", () => {
		const result = newLine.run(`\nContent`);

		assert.ok(isParseSuccess(result));
	});
});
