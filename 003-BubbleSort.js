// Bubble Sort
// Author : Rijul Luman

// If you would like to use any part of this projects code in your project, just add the following comment just above the code: 
// This code is borrowed from Rijul Luman : https://github.com/kidpikoon/Basic-Algorithms

var bubbleSort = function(array){
	for(var i = 0; i < array.length; i++){
		for(var j = 1; j < array.length - i; j++){
			if(array[j] < array[j-1]){
				var temp = array[j];
				array[j] = array[j-1];
				array[j-1] = temp;
			}
		}
	}
	return array;
};

module.exports = bubbleSort;