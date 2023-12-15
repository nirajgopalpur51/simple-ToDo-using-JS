let todo =[];

let req=prompt("ENter your request");

while(true){
    if(req=="quit"){
        console.log("quit to the app")
        break;
    }

    else if(req=="add"){
        let adding=prompt("Enter your todo");
        todo.push(adding);
        console.log("task added");
        
    }

    else if(req=="list"){
        for(let i=0 ; i<todo.length; i++){
            console.log(i,todo[i])
        }
    }

    else if(req=="delete"){
        let ind = prompt("Enter the index you want to delete");

        todo.splice(ind,1);
        console.log("task deleted");
    }
    else{
        console.log("sorry wrong request")
    }
     req=prompt("ENter your request");
}