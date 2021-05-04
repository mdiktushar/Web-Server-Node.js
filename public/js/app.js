console.log("Tushar is My Name");

let uri = 'http://localhost:3000/weather?address=colla,bd';
fetch(uri).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
            console.log(data.error);
        else
            console.log(data)
    })
})