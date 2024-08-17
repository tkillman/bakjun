// https://www.acmicpc.net/problem/2444
const fs = require('fs');
let input = fs.readFileSync('input.txt').toString();

let n = Number(input);

const solution = () => {
  	for(let i = 1; i <= n; i++) {
    	let str = '';

		for(let k = 0; k < n - i; k++) {
			str+= " ";
		}

		for(let k = 0; k < i + (i - 1); k++){
			str+= "*";
		}
			
    	console.log(str);
	}

	for(let i = n - 1; i > 0; i--) {
    	let str = '';
		for(let k = 0; k < n - i; k++) {
			str+= " ";
		}
			
		for(let k = 0; k < i + (i - 1); k++){
			str+= "*";
		}
      	
		console.log(str);
	}
}

solution();