function convert(dateStr){
	var wday = new Date(dateStr).getDay();
	var time = {
		"0": "零",
        "1": "一",
        "2": "二",
        "3": "三",
        "4": "四",
        "5": "五",
        "6": "六",
        "7": "七",
        "8": "八",
        "9": "九",
        "10": "十",
	}
	var date = dateStr.split('-'),
		yy = date[0],
		mm = date[1],
		dd = date[2];

	var year = time[yy[0]] + time[yy[1]] + time[yy[2]] + time[yy[3]] + "年  ",
		month = time[mm[0]] + time[mm[1]] + "月  ",
		day = time[dd[0]] + time[dd[1]] + "日  ",
		weekday = "星期 " + time[wday];
	console.log(year + month + day);
	console.log(weekday);

}
convert("2014-06-21");