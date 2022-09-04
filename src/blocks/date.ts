import { line, ParseFailure, Parser, ParseSuccess } from "teg-parser";

export type DateToken = {
	type: "date";
	content: Date;
};

/** Parse date */
export const dateParser: Parser<DateToken> = line
	.chain(
		(str) =>
			new Parser((stream) => {
				const content = new Date(str);

				if (content.toString() === "Invalid Date") {
					return new ParseFailure(`Expected date, found, ${str}`, stream);
				}

				return new ParseSuccess({ content, type: "date" as const }, stream);
			})
	)
	.withErrorScope("Date");
