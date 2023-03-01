import Heap from "./Heap.js";


//const pairwiseQueue = new Heap((a, b) => a[1] > b[1]);
const pairwiseQueue = new Heap((a, b) => a[1] < b[1]);
pairwiseQueue.push(['low', 0], ['medium', 5], ['high', 10]);
//pairwiseQueue.push(0, 1, 4, -30);
console.log('\nContents:');
while (pairwiseQueue.size()) {
  console.log(pairwiseQueue.pop()); //=> 'high', 'medium', 'low'
}