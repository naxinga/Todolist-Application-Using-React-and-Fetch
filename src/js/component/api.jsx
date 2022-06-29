
fetch('https://assets.breatheco.de/apis/fake/todos/user/naxinga', {
    method: "PUT",
    body: JSON.stringify(todos),
    headers: {
      "Content-Type": "application/json"
    }
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

export default fetch;