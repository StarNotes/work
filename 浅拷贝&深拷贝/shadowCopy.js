function shadowCopy(obj){
	var obj1;
	if(obj instanceof Array){
		obj1 = [];
		for(var i=0; i < obj.length; i++){
			obj1[i] = obj[i];			
		}return obj1;
	}
	if(typeof obj === "object" && obj + "" ==="[object Object]"){
		obj1 = {};
		for(var k in obj){
			obj1[k] = obj[k];			
		}return obj1;
	} 
	else{
		obj1 = obj;
	}return obj1;
}
var arr = [1, 2, 3];
var obj2 = shadowCopy(arr);
var person = {
	"name" : "hello",
	"age" : 20
};
var obj3 = shadowCopy(person);
console.log(obj2);
console.log(obj3);