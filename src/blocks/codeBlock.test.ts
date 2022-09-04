import { testParser } from "teg-parser/testParser";
import { codeBlockParser, langParser } from "./codeBlock";

describe("codeBlock", () => {
	testParser("lang parser", langParser, `\`\`\`rust\n`, "rust");

	testParser("lang parser without lang", langParser, "```\n", undefined);

	testParser(
		"works",
		codeBlockParser,
		`\`\`\`
const code = runCode();
\`\`\``,
		{ type: "codeBlock", content: "const code = runCode();", lang: undefined }
	);
});
