import React, { useState } from "react";

function GifSearch({ handleSubmit }) {
	const [searchInput, setSearchInput] = useState("");
	function submission(event) {
		event.preventDefault();
		handleSubmit(searchInput);
	}
	return (
		<form onSubmit={submission}>
			<input
				type="text"
				value={searchInput}
				onChange={(event) => setSearchInput(event.target.value)}
			/>
			<input type="submit" />
		</form>
	);
}

export default GifSearch;
