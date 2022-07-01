import React, { useEffect } from "react";
import react, {useState} from "react";
import ToDo from "./todo.jsx";
//import fetch from "./api.jsx";


const Formulario = () => {

    const [valInput,setInput] = useState("");
    const [valTarea,setTarea] = useState([]);     
    
    

    const manejador = (event) => { if (event.key === "Enter"){ setTarea([...valTarea,valInput])}}

    const borrar = (bor) => {
        let a = [...valTarea]
        a.splice(bor,1);
        setTarea(a);
    }   
      
    const imprimir = valTarea.map((valTarea,indice) =>
        <div id={indice} key={indice} className="text-start linea">{valTarea} <button id="borrador" onClick={()=>borrar(indice)}> X </button></div>
   
    )
  
	return (
            <div className="todo-list">
                <div className="file-input">
                <input
                    type="text"
                    className="text"
                    id="inp"
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