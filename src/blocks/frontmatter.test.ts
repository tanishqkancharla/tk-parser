import { frontMatterParser } from "./frontmatter";
import { testParser } from "./testParser";

describe("frontmatter", () => {
	testParser(
		"works",
		frontMatterParser,
		`
---
name: Tanishq
last_name: Kancharla
locations: [Washington D.C., New York]
---
`,
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
