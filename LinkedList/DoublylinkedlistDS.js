//********************** LINKED LIST **********************//
// operations:
// -add node to head
// -add node to tail
// -remove node from head
// -remove node from tail
// -search value
// -get index of value passed


function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

//add node to head to LinkedList
LinkedList.prototype.addToHead = function(value) {
  //create new node
  //value is padded by addToHead
  //next is this.head
  var newNode = new Node(value, this.head, null);
  //if not empty
  if (this.head) {
    //update the new head node to newNode
    this.head.prev = newNode;
  } else {
    //if empty set newNode to the tail aswell.
    this.tail = newNode;
  }
  //update the this.head regardless if the linkedlist was empty or not.
  this.head = newNode;
};

//add node to tail to LinkedList
LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);

  //if the linked list is not empty
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    //if the linked list is empty
    //new node will be both head and tail
    this.head = newNode;
  }

  this.tail = newNode;
};

//remove node from head of LinkedList
LinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return null;
  }
  var val = this.head.value;
  this.head = this.head.next;
  //if we started with more than one node in the list
  if (this.head) {
    this.head.prev = null;
  } else {
    //if when deleted the head is empty
    //this.head will already be null so just set this.tail to null.
    this.tail = null;
  }
};

//remove node from tail of LinkedList
LinkedList.prototype.removeTail = function() {
  if (!this.tail) {
    return null;
  }
  var val = this.tail.value;
  this.tail = this.tail.prev;
  //check if the list will be empty after removing the node.
  if (this.tail) {
    this.tail.next = null;
  } else {
    //if list is empty after deletion
    //this.tail is already null by default when empty;
    this.head = null;
  }
};

//search
LinkedList.prototype.search = function(value) {
  if (!this.tail) {
    return 'List is Empty';
  }
  //there is only one node
  if (this.head.next == null) {
    console.log('only one node');
    return this.tail.value;
  }
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) {
      return currentNode.value;
    } else {
      currentNode = currentNode.next;
    }
  }
  return 'value not in LinkedList';
};

//index of
LinkedList.prototype.indexOf = function(value) {
  var counter = 0;
  var index = 0;
  var indexArr = [];
  var currentNode = this.head;

  while (currentNode) {
    if (currentNode.value === value) {
      indexArr[index] = counter;
      index++;
    }

    currentNode = currentNode.next;
    counter++;
  }
  return indexArr;
};

var myll = new LinkedList();

myll.addToHead(8);
myll.addToHead(3);
myll.addToHead(5);
myll.addToHead(3);

myll.indexOf(5);
