	import React from "react";
	import srcImage from "./images/image.png";
	function App() {
	return (
	<div style={{ textAlign: "center", padding: "20px" }}>
	<h1>Displaying Images in React</h1>
	{/* Image from public folder (Use relative path) */}
	<h2>Image from public folder</h2>
	<img src={`${process.env.PUBLIC_URL}image.png`} alt="Public Folder Image"
	width="300" />
	{/* Image from src folder (Must be imported) */}
	<h2>Image from src folder</h2>
	<img src={srcImage} alt="Src Folder Image" width="300" />
	</div>
	);
	}
	export default App;
