
const weatherFrom = document.querySelector('form');
const search = document.querySelector('input');

const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherFrom.addEventListener('submit', (e)=>{
    e.preventDefault();
    const location = search.value;

    messageOne.textContent = 'Loading...!'
    messageTwo.textContent = '';
    weather(location);
})


const weather = (location) =>{
    let uri = 'http://localhost:3000/weather?address='+location;
    fetch(uri).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                 messageOne.textContent = data.error;
            }else{
                messageOne.textContent = data.location;
                messageTwo.textContent = data.weather;
            }
        })
    })
}