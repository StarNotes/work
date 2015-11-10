function countDowm(newDate){
	var nDate = new Date(newDate),
		oDate = new Date(),
		during = (nDate - oDate)/1000;

	var day = Math.floor(during/(24*60*60)),
		t1 = during - (day*24*60*60),
		hours = Math.floor(t1/(60*60)),
		t2 = t1 - (hours*60*60),
		min = Math.floor(t2/60),
		sec = Math.floor(t2%60);

	var time = [ day + '日', hours + '小时', min + '分钟', sec + '秒']

	for (var i=0; i < time.length; i++){
		    var T ="";
			if(time[i].substr(0,1) == '0'){
				console.log(" ");
			}else{
				T = T + time[i];	
				console.log(T);
			}
		}
		return;	
	}

	setInterval(function(){
		var str = countDowm(newDate);
		
	},1000);

	var newDate = "2016-01-01";