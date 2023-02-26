import Heap from "../Heap";

const test_push = (heap, value) => {
  expect(heap.size()).toEqual(0);

  if (Array.isArray(value)) {
    heap.push(...value);
    expect(heap.size()).toEqual(value.length);
  } else {
    heap.push(value);
    expect(heap.size()).toEqual(1);
  }

  return heap;
}

const test_pop = (input, output, finalSize) => {
  const heap = new Heap();
  heap.push(...input);

  output.forEach( expectedValue => {
    expect(heap.pop()).toEqual(expectedValue);
  })

  expect(heap.size()).toEqual(finalSize);
}

describe("Heap", () => {
  test("should be able to retrieve the queue's size", () => {
    const heap = new Heap();
    test_push(heap, 1);
  })

  test("should push an object to the queue.", () => {
      let heap = new Heap();
      const expectedValue = 1;
      heap = test_push(heap, expectedValue);

      expect(heap.peek()).toEqual(expectedValue);
  })

  test("should push multiple objects to the queue.", () => {
    let heap = new Heap();
    const expectedValue = 3;
    heap = test_push(heap, [3, 2, 1]);

    expect(heap.peek()).toEqual(expectedValue);
  })

  test("should pop the expected element from the queue.", () => {
    let testInput = [5, 3, 4, 2];
    let testOutput = testInput.sort().reverse();
    test_pop(testInput, testOutput, 0);
  })

  test("should place the minimum element on the top.", () => {
    let testInput = [5, 2, 3, 1];
    let testOutput = [5, 2, 2, 1];

    let zip = testInput.map((a, b) => {
      return [a, testOutput[b]];
    });

    const heap = new Heap((a, b) => {
      return a < b;
    });

    zip.forEach(testCase => {
      heap.push(testCase[0])
      expect(heap.peek()).toEqual(testCase[1]);
    })
  })
});