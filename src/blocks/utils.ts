import { char, not, oneOf, oneOrMore, Parser } from "teg-parser";

export const identity = <T>(arg: T) => arg;

export const concat = (strs: string[]) => strs.join("");

export const strWithoutChars = (chars: string[]): Parser<string> =>
	oneOrMore(not(oneOf(chars.map(char)))).map(concat);
