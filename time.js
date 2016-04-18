
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)


// humanReadable(0) // '00:00:00'
// humanReadable(5) // '00:00:05'
// humanReadable(60) // '00:01:00'
// humanReadable(86399) // '23:59:59'
// humanReadable(359999) // '99:59:59'

function humanReadable(seconds) {
  var hours = seconds / 3600,
  minutes = seconds / 60 % 60,
  newSeconds = seconds %  60 ;
  
  function formatDate(n){
  var number = Number.parseInt(n)
  return number > 9 ? number : '0'+number;
}
  
  return formatDate(hours) +':' + formatDate(minutes)+':'+formatDate(newSeconds)
}

function humanReadable(num){
	if (num < 10){
		return ("00:00:0"+num)
	}
	else if (num < 60){
		return ("00:00:"+num)
	}
	else if (num < 3600){
		var sec = num % 60
		var min = Math.floor(num / 60)
		if (sec < 10){
			sec = "0"+sec.toString()
		}
		if (min < 10){
			min = "0"+min.toString()
		}
		return ("00:"+min+":"+sec)
	}
	else if (num <= 359999){
		var sec = num % 60
		var min = Math.floor(num / 60 % 60)
		var hr = Math.floor(num / 60 / 60)
		if (sec < 10){
			sec = "0"+sec.toString()
		}
		if (min < 10){
			min = "0"+min.toString()
		}
		if (hr < 10){
			hr = "0"+hr.toString()
		}
		return (hr+":"+min+":"+sec)
	}
}