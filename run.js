// Runable file
// You can test out the all other functions from here
// Just uncomment the line you would like to use
// Author : Rijul Luman

var insertionSort 	= require("./001-InsertionSort");
var mergeSort 		= require("./002-MergeSort");
var bubbleSort 		= require("./003-BubbleSort");
var heapSort 		= require("./004-HeapSort");
// var priorityQueue 	= require("./006-PriorityQueue");
var quickSort 		= require("./006-QuickSort");
var countingSort 	= require("./007-CountingSort");


var array = [5,4,2,7,9,0,6,3,8,1];

// Note: 	Some of these Algorithms are supposed to work directly on the input array (By reference)
//			But I have changed the export functions in them, so that the input array remains unchanged

// console.log(	insertionSort(array)	);
// console.log(	mergeSort(array)		);
// console.log(	bubbleSort(array)		);
// console.log(	heapSort(array)			);
// console.log(	priorityQueue(array)	);
console.log(	quickSort(array)		);
// console.log(	countingSort(array)		);

// console.log(array);


