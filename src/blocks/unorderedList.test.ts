import { testParser } from "teg-parser/testParser";
import { RichTextContent } from "./richText";
import { unorderedListParser } from "./unorderedList";

const plain = (content: string): RichTextContent => [
	{ type: "plain", content },
];

describe("unorderedList", () => {
	testParser("works", unorderedListParser, `- list item 1`, {
		type: "unorderedList",
		listItems: [plain("list item 1")],
	});

	testParser(
		"works with multiple list items",
		unorderedListParser,
		`- list item 1
- list item 2
- list item 3`,
		{
			type: "unorderedList",
			listItems: [
				plain("list item 1"),
				plain("list item 2"),
				plain("list item 3"),
			],
		}
	);

	testParser(
		"works with indented list items",
		unorderedListParser,
		`- list item 1
  - list item 1a
  - list item 1b
- list item 2
- list item 3`,
		{
			type: "unorderedList",
			listItems: [
				[
					plain("list item 1"),
					{
						type: "unorderedList",
						listItems: [plain("list item 1a"), plain("list item 1b")],
					},
				],
				plain("list item 2"),
				plain("list item 3"),
			],
		}
	);

	test.todo("Rich text content in list items");
});
