import React from "react";
import react, {useState} from "react";
import ToDo from "./todo.jsx";

const Formulario = () => {
    const [valInput,setInput] = useState("");
    const [valTarea,setTarea] = useState([]);  

    const manejador = (event) => { 
        if (event.key === "Enter"){ setTarea([...valTarea,valInput])}  
        console.log(valTarea);
    }

    const imprimir = valTarea.map((valTarea) =>
        <div>{valTarea}</div>
    )

	return (
            <div className="todo-list">
                <div className="file-input">
                <input
                    type="text"
                    className="text"
                    value={valInput}
                    onChange={e => setInput(e.target.value)}
                    onKeyUp={manejador}
                />
                </div>
                <ToDo tareas={imprimir}/>
            </div>		
	);
};

export default Formulario;