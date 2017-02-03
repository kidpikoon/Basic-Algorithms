// Counting Sort
// Author : Rijul Luman

// If you would like to use any part of this projects code in your project, just add the following comment just above the code: 
// This code is borrowed from Rijul Luman : https://github.com/kidpikoon/Basic-Algorithms

var countingSort = function (array) {
	var max = Math.max.apply(null, array);
	var countArray = [];
	var sortedArray = [];
	for(var i = 0; i <= max; i++){
		countArray[i] = 0;
	}
	for(var i = 0; i < array.length; i++){
		countArray[array[i]]++;
	}
	for(var i = 1; i <= max; i++){
		countArray[i] += countArray[i-1];
	}
	// countArray[index] now contains the number of elements less than or equal to its index
	for(var i = array.length - 1; i >= 0; i--){
		sortedArray[countArray[array[i]] - 1] = array[i]; 	// countArray[array[i]] -1 because our output array index starts from 0
		countArray[array[i]]--;
	}
	return sortedArray;
}

// incase Math.max.apply doesn't work for you
var getMax = function(array){
	var max = array[0]; 		// will return undefined for empty array
	array.forEach(function(num){
		if(num > max){
			max = num;
		}
	});
	return max;
}

module.exports = countingSort;

// console.log(getMax(arr));
