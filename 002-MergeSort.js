// Merge Sort
// Author : Rijul Luman

// If you would like to use any part of this projects code in your project, just add the following comment just above the code: 
// This code is borrowed from Rijul Luman : https://github.com/kidpikoon/Basic-Algorithms

var merge = function (array, start, mid, end){
	var a1 = [];
	var a2 = [];

	for(var i = start; i <= mid; i++){
		a1.push(array[i]);
	}
	for(var j = mid + 1; j <= end; j++){
		a2.push(array[j]);
	}

	var i = 0;
	var j = 0;

	for(var k = start; k <= end; k++){
		if(a1[i] == null){
			array[k] = a2[j];
			j++;
		}
		else if(a2[j] == null){
			array[k] = a1[i];
			i++;
		}
		else if(a1[i] < a2[j]){
			array[k] = a1[i];
			i++;
		}
		else{
			array[k] = a2[j];
			j++;
		}
	}

	return array;

};

var mergeSort = function(array, start, end){
	if (start < end){
		var mid = Math.floor((start + end) / 2);
		array = mergeSort(array, start, mid);
		array = mergeSort(array, mid+1, end);
		array = merge(array, start, mid, end);
	}
	return array;
};



var arr = [5,4,2,7,9,0,6,3,8,1];

var mergedArr = mergeSort(arr, 0, arr.length-1);
console.log(mergedArr.toString());