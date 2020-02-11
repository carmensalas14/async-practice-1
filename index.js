document.getElementById('button')

function logData(url){
    
    const xhr = new XMLHttpRequest(); //make new instance of an XML request
    
    // event listener 
    xhr.onreadystatechange = (e) => {
        // check if the request was processe
        // cdheck if ready state is 4 or if status is 200
        
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(JSON.parse(xhr.response)) // parsing the response to json
        }
        else if(xhr.status === 404){
            console.log('404 Error:')
        }
        
      console.log(xhr.responseText)
    }
    xhr.open("GET", url); //open url, get the response back 
    xhr.send(); // send 
    
} 

function get(url, passedInFunction){ // takes in two parameters, a url and a function 
    const xhr = new XMLHttpRequest(); 
    xhr.onreadystatechange = (e) => {
        
        if(xhr.readyState === 4 && xhr.status === 200){
            passedInFunction(JSON.parse(xhr.response))
        }
    }
    xhr.open("GET", url);  
    xhr.send(); 
} 

function paintDOM(str){
    document.write(`<h1>${str}</h1>`)
}
get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=690e069462802134ec9356cbafc9a9a7`, console.log)

function getTempeture(city){
    get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=690e069462802134ec9356cbafc9a9a7`, function(response) {
            const city = response.name
            const temp = response.main.temp
            const weather = response.weather[0].main
            
            paintDOM(`${city} is ${temp} with ${weather}`)
        })
}

getTempeture('london')
