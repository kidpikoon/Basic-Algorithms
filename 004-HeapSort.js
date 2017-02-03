// Heap Sort (Decending order)
// Author : Rijul Luman

// If you would like to use any part of this projects code in your project, just add the following comment just above the code: 
// This code is borrowed from Rijul Luman : https://github.com/kidpikoon/Basic-Algorithms

var heapSort = function(array) {
	buildMaxHeap(array);
	var sortedArray = [];
	for(var i = array.length; i > 0; i--){
		sortedArray.push(array[0]);
		array[0] = array[(array.length - 1)];
		array.splice(array.length - 1, 1);
		maxHeapify(array, 0);
	}

	return sortedArray;
};

var buildMaxHeap = function(array) {
	for(var i = Math.floor(array.length / 2) ; i >= 0 ; i--){
		maxHeapify(array, i);
	}
	return array;
};

var maxHeapify = function (array, index) {
	if(index >= array.length){
		return array;
	}

	var leftChild  = array[getLeftChildIndex(index)];		
	var rightChild = array[getRightChildIndex(index)];

	var largest = array[index];
	if(leftChild != null && leftChild > largest){
		largest = leftChild;
	}
	if(rightChild != null && rightChild > largest){
		largest = rightChild;
	}
	if(largest != array[index]){
		// console.log("largest" , largest);
		if(leftChild == largest){
			array[getLeftChildIndex(index)] = array[index];
			array[index] = largest;
			maxHeapify(array, getLeftChildIndex(index));
		}
		else{
			array[getRightChildIndex(index)] = array[index];
			array[index] = largest;
			maxHeapify(array, getRightChildIndex(index));
		}
	}
	return array;
}

var getLeftChildIndex = function(index) {
	return 2 * index + 1; 	// index + 1, since array starts from index 0
};

var getRightChildIndex = function(index) {
	return 2 * index + 2; 	// index + 1, since array starts from index 0
};

var arr = [5,4,2,7,9,0,6,3,8,1];

console.log(heapSort(arr));