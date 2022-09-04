import { testParser } from "teg-parser/testParser";
import { imageParser } from "./image";

describe("image", () => {
	testParser(
		"works",
		imageParser,
		"[image:/posts/ui-as-an-api/spotify-console.png](The Spotify API Console)",
		{
			type: "image",
			url: "/posts/ui-as-an-api/spotify-console.png",
			caption: "The Spotify API Console",
		}
	);

	testParser(
		"works without caption",
		imageParser,
		"[image:/posts/ui-as-an-api/spotify-console.png]",
		{
			type: "image",
			url: "/posts/ui-as-an-api/spotify-console.png",
			caption: undefined,
		}
	);
});
