// Insertion Sort
// Author : Rijul Luman

// If you would like to use any part of this projects code in your project, just add the following comment just above the code: 
// This code is borrowed from Rijul Luman : https://github.com/kidpikoon/Basic-Algorithms

var arr = [5,4,2,7,9,0,6,3,8,1];

for(var i = 1; i < arr.length; i ++){
	var j = i-1;
	var key = arr[i];
	while(j >= 0 && arr[j] > key){
		arr[j+1] = arr[j];
		arr[j] = key;
		j--;
	}
}

console.log(arr.toString());