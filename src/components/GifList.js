import React from "react";

function GifList({ result }) {
	return (
		<ul>
			{result.map((gif) => (
				<li key={gif.url}>
					<img src={gif.url} alt="gif" />
				</li>
			))}
		</ul>
	);
}

export default GifList;
