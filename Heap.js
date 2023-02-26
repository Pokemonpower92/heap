class Heap {
  /**
   * Create a new priority queue with the
   * given comparision function in comparator.
   * @param {func} comparator
   */
  constructor(
    comparator = (a, b) => {
      return a > b;
    }
  ) {
    this._heap = [];
    this._comparator = comparator;

    this.top = 0;
    this.parent = (i) => ((i + 1) >>> 1) - 1;
    this.left = (i) => (i << 1) + 1;
    this.right = (i) => (i + 1) << 1;
  }

  /**
   * Returns the size of the heap.
   * @returns {int} Current size of the heap.
   */
  size = () => {
    return this._heap.length;
  };

  /**
   * Determine if the heap is empty or not.
   * @returns {Boolean} If the heap is empty or not.
   */
  isEmpty = () => {
    return this.size() === 0;
  };

  /**
   * Push the given object onto the heap and rectify it.
   * @param {Object} object
   */
  push = (...objects) => {
    objects.forEach((object) => {
      this._heap.push(object);
      this._siftUp();
    });
    console.log(this._heap);
  };

  /**
   * Pop the min element from the queue and return it.
   * @return {Object} Min element from queue.
   */
  pop = () => {
    if (this.isEmpty() === false) {
      const retValue = this._heap[0];
      this._siftDown();

      return retValue;
    } else {
      return null;
    }
  };

  /**
   * Return the min value without popping it.
   */
  peek = () => {
    if (this.isEmpty() === false) {
      return this._heap[0];
    } else {
      return null;
    }
  };

  _compare = (a, b) => {
    return this._comparator(a, b);
  };

  _swap = (a, b) => {
    let temp = this._heap[a];
    this._heap[a] = this._heap[b];
    this._heap[b] = temp;
  };

  /**
   * Sifts the first element of the heap into its proper place.
   * @returns null
   */
  _siftDown = () => {
    // [1]
    this._swap(0, this.size() - 1);
    this._heap = this._heap.slice(0, this.size() - 1);
    console.log(`Old heap: ${this._heap}`)

    let currNode = 0;

    while (currNode < this.size()) {
      const rightChild = this.right(currNode);
      const leftChild = this.left(currNode);
      const swapChild = this._compare(
        this._heap[rightChild],
        this._heap[leftChild]
      )
        ? rightChild
        : leftChild;
      console.log(`Swap child: ${swapChild}`)

      if (this._compare(this._heap[swapChild], this._heap[currNode])) {
        this._swap(currNode, swapChild);
        console.log(`New heap: ${this._heap}`)
        currNode = swapChild;
      } else {
        break;
      }

      
    }
  };

  /**
   * Sift the newest element into its expected position.
   * @returns null
   */
  _siftUp = () => {
    let currNode = this.size() - 1;

    while (currNode >= 0) {
      if (
        this._compare(this._heap[currNode], this._heap[this.parent(currNode)])
      ) {
        this._swap(currNode, this.parent(currNode));
        currNode = this.parent(currNode);
      } else {
        break;
      }
    }
  };
}

export default Heap;
