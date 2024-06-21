function request(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response){
        return response.json()
    })
    .then((response) =>{
        var result = "";
        
        console.log(response);
        response.forEach(element =>{
            result = result  + "User Id : " + element.userId + "\tId : " + element.id + "\ttitle : " + element.title + "\tcompleted : " + element.completed + "<br><br>"
         });
	document.getElementById("result").innerHTML = result ;
    })
}