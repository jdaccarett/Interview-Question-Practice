// Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.

// Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

// Example

// For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
// removeKFromList(l, k) = [1, 2, 4, 5];
// For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
// removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].
// Input/Output

// [time limit] 4000ms (js)
// [input] linkedlist.integer l

// A singly linked list of integers.

// Guaranteed constraints:
// 0 ≤ list size ≤ 105,
// -1000 ≤ element value ≤ 1000.

// [input] integer k

// An integer.

// Guaranteed constraints:
// -1000 ≤ k ≤ 1000.

// [output] linkedlist.integer

// Return l with all the values equal to k removed.


// FIRST IMPLEMANTATION:
function removeKFromList(l, k) {

    var myll = new LinkedList(); var counter = 0; var array = [];

    for (var i = l.length - 1; i >= 0; i--){
        console.log("here " + l[i]);
        myll.addtoHead(l[i]);
    }

    myll.remove(k);
    var currentNode =  myll.head;

    while(currentNode){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

   return array;
}

//LINKED LIST IMPLEMENTATION:
// METHODS:
// - Add to head
// - contains
// - remove
function LinkedList() {
    this.head = null;
    this.tail = null;
}

function ListNode(value, next) {
    this.value = value;
    this.next = next;
}

LinkedList.prototype.addtoHead = function(value) {
    var newNode = new ListNode(value, this.head);

    //if list is empty set tail to node also
    if(!this.head) this.tail = newNode;

    this.head = newNode;
};

LinkedList.prototype.contains =  function (value) {

    var currentNode = this.head;

    if (this.head.value === value) {
      return true;
    }

    while(currentNode) {

        if(currentNode.value === value){
           return true;
        }

        currentNode = currentNode.next;
    }

    return false;
};

LinkedList.prototype.remove = function (value) {

    var currentNode = this.head;
    var prev = this.head;

    if (!this.contains(value)) {
      return false;
    }

    if(this.head.value === value){
        this.head = this.head.next;
    }

    while(currentNode) {

      if(currentNode.value === value) {
        prev.next = currentNode.next;
      }

      prev = currentNode;
      currentNode = currentNode.next;

    }

};


//Main
l = [1, 2, 3, 4, 5, 6, 7];
removeKFromList(l, 10);
