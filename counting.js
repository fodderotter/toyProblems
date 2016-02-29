/*
'anane' === 1
'adak' === 2

amazonCounting(1) // 'anane'
amazonCounting(2) // 'adak'
amazonCounting(13) // 'adak adak adak adak adak adak anane'

No trailing spaces!
*/

function amazonCounting(num) {
	var one = 'anane'
	var two = 'adak'
	var total = [];
	if (num % 2 === 0) {
		for (var i = 0; i < num/2; i++) {
			total.push(two);
		}
	}
    else {
        for (var i = 0; i < Math.floor(num/2); i++) {
            total.push(two);
        }
        total.push(one);
    }
	return total.join(" ");
}

function amazonCounting(num) {
	switch (num) {
		case 0: return '';
		case 1: return 'anane';
		case 2: return 'adak';
		default: return 'adak ' + amazonCounting(num - 2);
	}
}