import React from "react";
import react, {useState} from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const ToDo = () => {

	const [valInput,setInput] = useState("");

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">ToDo</h1>
				<input value={valInput} onChange={e => setInput(e.target.value)}/>
				<br/>
				{valInput}
		</div>
		
	);
};

export default ToDo;
