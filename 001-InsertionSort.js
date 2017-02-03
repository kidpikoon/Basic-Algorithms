// Insertion Sort
// Author : Rijul Luman

// If you would like to use any part of this projects code in your project, just add the following comment just above the code: 
// This code is borrowed from Rijul Luman : https://github.com/kidpikoon/Basic-Algorithms

var insertionSort = function (array) {
	for(var i = 1; i < array.length; i ++){
		var j = i-1;
		var key = array[i];
		while(j >= 0 && array[j] > key){
			array[j+1] = array[j];
			array[j] = key;
			j--;
		}
	}
	return array;
};

module.exports = insertionSort;