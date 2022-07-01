import React, { useEffect } from "react";
import react, {useState} from "react";
import ToDo from "./todo.jsx";
//import fetch from "./api.jsx";


const Formulario = () => {

    const [valInput,setInput] = useState("");
    const [valTarea,setTarea] = useState([]);     
    
    useEffect (
        ()=>{
            fetch('https://assets.breatheco.de/apis/fake/todos/user/naxinga', {
                    method: "GET", // Si no se le especifica metodo es GET, aqui sobraría.
                })
                .then(resp => {
                    console.log(resp.ok); // will be true if the response is successfull
                    console.log(resp.status); // the status code = 200 or code = 400 etc.
                    console.log(resp.text()); // will try return the exact result as string
                    return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
                })
                .then(data => {
                    setTarea(data);
                })
                .catch(error => {
                    //error handling
                    console.log(error);
                });
        }, 
        []
    )

    const manejador = (event) => { if (event.key === "Enter"){ setTarea([...valTarea,valInput])}}

    const borrar = (bor) => {
        let a = [...valTarea]
        a.splice(bor,1);
        setTarea(a);
    }   
      
    const imprimir = valTarea.map((valTarea,indice) =>
        <div id={indice} key={indice} className="text-start ms-5 mt-4">{valTarea} <button id="borrador" onClick={()=>borrar(indice)}> X </button></div>
   
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