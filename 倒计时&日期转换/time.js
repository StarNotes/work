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

		return '还剩' + day + '天 ' + hours + '小时 ' + min + '分 ' + sec + '秒 ';
	}

	setInterval(function(){
		var str = countDowm(newDate);
		console.log(str);
	},1000);

	var newDate = "2016-1-1";
	