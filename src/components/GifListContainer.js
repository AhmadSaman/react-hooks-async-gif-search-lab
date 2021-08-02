import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
	const [searchResult, setSearchResult] = useState("dog");
	const [result, setResult] = useState([]);
	useEffect(() => {
		fetch(
			`https://api.giphy.com/v1/gifs/search?q=${searchResult}&api_key=5sH6YvqH8BeonXt8ZC8WTsXczNgUxLb4&rating=g`
		)
			.then((r) => r.json())
			.then(({ data }) => {
				const gifs = data
					.filter((gif, index) => (index < 3 ? gif : false))
					.map((gif) => ({
						url: gif.images.original.url,
					}));
				setResult(gifs);
			});
	}, [searchResult]);
	return (
		<div>
			<GifSearch handleSubmit={setSearchResult} />
			<GifList result={result} />
		</div>
	);
}

export default GifListContainer;
