document.getElementById('form').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let age = document.getElementById('age').value;
  
    let data = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
  
    console.log(data);
  
  
      let result = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(respone =>respone.json())
      .then(respone =>console.log({respone}))
      .catch((error) => console.log(error.message))
     
      let success =document.getElementById('success')
      result && result.id? success.innerHTML ="user created successfully":
        success.innerHTML ="user not created"
      console.log({result})
  

  });