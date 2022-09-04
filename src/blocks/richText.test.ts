import { testParser } from "teg-parser/testParser";
import {
	boldParser,
	codeParser,
	italicParser,
	plainParser,
	richTextParser,
} from "./richText";

describe("Rich Text", () => {
	testParser("bold", boldParser, `*bold content*`, {
		type: "bold",
		content: "bold content",
	});

	testParser("italic", italicParser, `_italic content_`, {
		type: "italic",
		content: "italic content",
	});

	testParser("code", codeParser, `\`code content\``, {
		type: "code",
		content: "code content",
	});

	testParser("plain", plainParser, `plain`, {
		type: "plain",
		content: "plain",
	});

	testParser("richText", richTextParser, "*bold* to _italic_ to `code`", [
		{
			type: "bold",
			content: "bold",
		},
		{
			type: "plain",
			content: " to ",
		},
		{
			type: "italic",
			content: "italic",
		},
		{
			type: "plain",
			content: " to ",
		},
		{
			type: "code",
			content: "code",
		},
	]);
});
