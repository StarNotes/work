function getNewDay(n){
	var d = new Date(),	
		time1 = d.getTime(),	
		during = n*24*60*60*1000,
		time2 = time1-during;
	var time = {
		"0": "日",
        "1": "一",
        "2": "二",
        "3": "三",
        "4": "四",
        "5": "五",
        "6": "六",
		}
	var	od= new Date(time2),
		year = od.getFullYear(),
		month = (((od.getMonth()+1)/100)+"").substr(2),
		date = (((od.getDay()+1)/100)+"").substr(2),
		hours = od.getHours(),
		min = od.getMinutes(),
		sec = od.getSeconds();
		day = time[od.getDay()];
	var arr1 = [year,month,date],
		arr2 = [hours,min,sec];

		console.log(arr1.join("-") + "   星期" + day);
		console.log(arr2.join(":"));
		return ;	
}
getNewDay(30);


