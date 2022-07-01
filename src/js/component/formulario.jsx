import React, { useEffect } from "react";
import react, {useState} from "react";
import ToDo from "./todo.jsx";
import { getApiTasks } from "./api.jsx";
import { putApiTask } from "./api.jsx";

const Formulario = () => {

    const [valInput,setInput] = useState("");
    const [valTarea,setTarea] = useState([]);     
    
    useEffect (
        ()=>{ 
                getApiTasks().then(data => {
                    setTarea(data)
                })
        }, 
        []
    )

    useEffect (
        ()=>{putApiTask(valTarea)}, 
    )

    const obj = {label:valInput,done:false};    

    const manejador = (event) => { if (event.key === "Enter"){ setTarea([...valTarea,obj])}}

    const borrar = (bor) => {
        let a = [...valTarea]
        a.splice(bor,1);
        setTarea(a);
    }   
      
    const imprimir = valTarea.map((valTarea,indice) =>
        <div id={indice} key={indice} className="text-start linea">{valTarea.label} <button id="borrador" onClick={()=>borrar(indice)}> X </button></div>
   
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