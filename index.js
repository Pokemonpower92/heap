import Heap from "./Heap.js";

const heap = new Heap((a, b) => {
  return a < b;
});

const input = [5, 3, 4, 6];

input.forEach(value => {
  heap.push(value);
  console.log(heap);
})

console.log(heap);

while (heap.size() !== 0) {
  console.log(heap.pop());
}