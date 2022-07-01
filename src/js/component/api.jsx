export const getApiTasks = async() =>{
  try{
    const resp = await fetch('https://assets.breatheco.de/apis/fake/todos/user/naxinga', {
      method: "GET", // Si no se le especifica metodo es GET, aqui sobraría.
    })

      const data = await resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
      
      return data;

  } catch(error) {
      console.log(error);
  }
}

export const putApiTask = async(put) => {
  try{
    const resp = await fetch('https://assets.breatheco.de/apis/fake/todos/user/naxinga', {
      method: "PUT",
      body: JSON.stringify(put),
      headers: {
       "Content-Type": "application/json"
      }
  })

      } catch(error) {
        console.log(error);
      }
  }