function deepCopy(o){
	if(o instanceof Array){
		var arr = [];
		for(var i = 0; i < o.length; i++ ){
			if((o[i] instanceof Array) || (typeof o[i] === "object")&&( o[i] + "" ==="[object Object]")){
				arr[i] = deepCopy( o[i] );
			}else{
				arr[i] = o[i];
			}			
		}return arr;
	}
	if((typeof o === "object")&&( o + "" ==="[object Object]")){
		var obj = {};
		for(var k in o){
			if((o[k] instanceof Array) || (typeof o[k] === "object")&&( o[k] + "" ==="[object Object]")){
				obj[k] = deepCopy(o[k]);
			}else{
				obj[k] = o[k];
			}
		}return obj;
	}
	else{
		return o;
	}
}



var person = {
    "name":"Tom",
    "age":24,
    "hobby":["sleep", "read", "music"]    
},
	p = deepCopy(person);

var newArr=["hello", 2, {
  "name":"abc",
  "sex":"male",
}],
	n = deepCopy(newArr);
var a = 1,
	b = deepCopy(a);
console.log(p);
console.log(n);
console.log(b);