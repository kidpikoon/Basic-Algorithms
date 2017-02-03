// Bubble Sort
// Author : Rijul Luman

// If you would like to use any part of this projects code in your project, just add the following comment just above the code: 
// This code is borrowed from Rijul Luman : https://github.com/kidpikoon/Basic-Algorithms

var arr = [5,4,2,7,9,0,6,3,8,1];

for(var i = 0; i < arr.length; i++){
	for(var j = 1; j < arr.length - i; j++){
		if(arr[j] < arr[j-1]){
			var temp = arr[j];
			arr[j] = arr[j-1];
			arr[j-1] = temp;
		}
	}
}

console.log(arr.toString());