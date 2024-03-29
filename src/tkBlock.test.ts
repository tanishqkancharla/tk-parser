import { isParseSuccess, zeroOrMore } from "teg-parser";
import { testParser } from "teg-parser/testParser";
import { assert } from "./assertUtils";
import { tkBlock } from "./TKBlock";

describe("tkBlock", () => {
	it("Parsing block works", () => {
		const heading1 = "# Heading\n";
		const heading2 = "## Heading\n";
		const heading3 = "### Heading\n";
		const unorderedList = "- list item\n- list item 2\n";
		const twitter =
			"[tweet:https://twitter.com/joeyabanks/status/1417505963272249346?s=21]\n";
		const divider = "---\n";
		const codeBlock = "```\nconst code = runCode();\n```\n";
		const newLine = "\n";
		const paragraph = "paragraph\n";

		const exampleBlocks = [
			heading1,
			heading2,
			heading3,
			unorderedList,
			twitter,
			divider,
			codeBlock,
			newLine,
			paragraph,
		];

		for (const possibleBlock of exampleBlocks) {
			const result = tkBlock.run(possibleBlock);
			assert.ok(isParseSuccess(result));
			assert.ok(
				result.stream.isEmpty,
				"Stream wasn't consumed" + possibleBlock
			);
		}
	});

	testParser(
		"Correct parses spaces between paragraphs",
		zeroOrMore(tkBlock),
		`
Hey! 🙋🏾‍♂️ I'm Tanishq. Moonrise is my personal website. I mostly use it as a space to express myself.
I love thinking about rich text editors, extensible programming languages, and just expressive, fun, robust interfaces to software.
I recently graduated from Carnegie Mellon University majoring in physics and computer science, and I'm currently looking for my next opportunity.`,
		[
			{ type: "newLine" },
			{
				type: "paragraph",
				content: [
					{
						type: "plain",
						content:
							"Hey! 🙋🏾‍♂️ I'm Tanishq. Moonrise is my personal website. I mostly use it as a space to express myself.",
					},
				],
			},
			{ type: "newLine" },
			{
				type: "paragraph",
				content: [
					{
						type: "plain",
						content:
							"I love thinking about rich text editors, extensible programming languages, and just expressive, fun, robust interfaces to software.",
					},
				],
			},
			{ type: "newLine" },
			{
				type: "paragraph",
				content: [
					{
						type: "plain",
						content:
							"I recently graduated from Carnegie Mellon University majoring in physics and computer science, and I'm currently looking for my next opportunity.",
					},
				],
			},
		]
	);
});
