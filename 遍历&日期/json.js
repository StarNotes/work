var people = {
        name: 'kevin',
        age: 100,
        dog: {
            name: 'yellow',
            age: 3,
            cat: {
            	name:'red',
            }
        }
    }
function putObj(obj){
	for(var k in obj){	
	    if(typeof obj[k] ==="object" && obj[k]+""==="[object Object]"){
	    	console.log(k + ":" );
	    	putObj(obj[k]);			
	    	}
	    else{
	    	console.log(k + ':' + obj[k] );
	    	}
		};
}
putObj(people);