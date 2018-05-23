import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends React.Component /* App is extending from this object*/{
	render()/*Returns JSX*/ {
		return(
			<div>
				<Titles />
				<Form />
				<Weather />
			</div>
		);
	}
};

export default App;

