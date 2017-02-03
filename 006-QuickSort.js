// Quick Sort
// Author : Rijul Luman

// If you would like to use any part of this projects code in your project, just add the following comment just above the code: 
// This code is borrowed from Rijul Luman : https://github.com/kidpikoon/Basic-Algorithms

var quickSort = function (array, start, end) {
	// start == null ? start = 0 : null;
	// end   == null ? end   = array.length - 1 : null;

	if(start < end){
		var mid = partiton(array, start, end);
		quickSort(array, start, mid - 1);
		quickSort(array, mid + 1, end);
	}
	
	return array;
};

var partiton = function(array, start, end){
	var pivot = array[end];
	var j = start;

	for(var i = start; i < end; i++){
		if(array[i] <= pivot){
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
			j++;
		}
	}

	array[end] = array[j];
	array[j] = pivot;

	return j;
};

var exportAbleQuickSort = function(array){
	if(!array.length){
		return array;
	}
	return quickSort([].concat(array), 0, array.length - 1);
};

module.exports = exportAbleQuickSort;