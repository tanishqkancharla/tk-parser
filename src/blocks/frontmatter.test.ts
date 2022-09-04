import { testParser } from "teg-parser/testParser";
import { frontMatterParser } from "./frontmatter";

describe("frontmatter", () => {
	testParser(
		"works",
		frontMatterParser,
		`---
name: Tanishq
last_name: Kancharla
locations: [Washington D.C., New York]
---`,
		{
			type: "frontmatter",
			content: {
				name: "Tanishq",
				last_name: "Kancharla",
				locations: ["Washington D.C.", "New York"],
			},
		}
	);
});
