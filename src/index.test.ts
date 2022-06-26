import { tkParser } from ".";
import { testParser } from "./blocks/testParser";

describe("Parser", () => {
	testParser(
		"works",
		tkParser,
		`
---
title: Heading
description: Description
date: 2021-07
---
Whoa a block
`,
		{
			metadata: {
				title: "Heading",
				description: "Description",
				date: "2021-07",
			},
			blocks: [
				{
					type: "paragraph",
					content: [{ type: "plain", content: "Whoa a block" }],
				},
			],
		}
	);

	testParser(
		"works without frontmatter",
		tkParser,
		`
Whoa a block
`,
		{
			metadata: {},
			blocks: [
				{
					type: "paragraph",
					content: [{ type: "plain", content: "Whoa a block" }],
				},
			],
		}
	);
});
