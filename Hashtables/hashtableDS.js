// HASH TABLE
//  Runtime:
// - lookup:    O(1)
// - insertion: O(1)

// KEY: VALUE:

// each piece of data will be assigned to a different bucket.
// we will take the key and hash it into a number.

//OPERATIONS:
// - insert
// - get data

// third hashing method to hash key.

//  example key: "name"
//        value: "email@address.com"


// Constructor for Hash Table
function HashTable(size) {
  this.buckets = Array(size); //defines where the data of hash is stored.
  this.numBuckets = this.buckets.length; //keep track buckets of hash table.
}

// Constructor for Hash Node
function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

//Method that hashes our key to an appropriate number
HashTable.prototype.hash = function(key) {
  var total = 0;
  //adds up each letter of key into unicode
  for (var i = 0; i < key.length; i++){
    total += key.charCodeAt(i);
  }
  //modules the total of key unicode val by size of array or # of buckets
  var bucket = total % this.numBuckets;
  //return the bucket which is the index
  //where we will insert key into the array
  return bucket;
};

//Insert Method will insert key in the correct bucket
// Take key and value pair turn them into hash node
// and place that node in correct bucket
HashTable.prototype.insert = function(key, value) {
  //will indicate the bucket to insert hash node.
  var index = this.hash(key);
  //console.log(index);
  //if bucket is empty
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  }
  //updates if its the first node in bucket.
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  }
  //if collision
  else{
    //attach new node to last node of chain

    var currentNode = this.buckets[index]; //starting point

    //while not the last node in chain keep traversing
    while (currentNode.next) {
      //update email address to existing user
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    //currentNode will be last node in chain
    //now create a new hash node and add it to chain
    currentNode.next = new HashNode(key, value);
  }

};


//Get Method
HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  //if bucket is empty return null
  if (!this.buckets[index]){
    return null;
  }
  else {
    var currentNode = this.buckets[index];
    //iterate through bucket if match retured
    //else keep looking
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    // if not match
    return null;
  }
};

//printAll the emails in the HashTable
HashTable.prototype.printAll = function() {
  var counter = 0;
  for (var i = 0; i < this.numbuckets; i++) {
    if(this.buckets[i]){
      var currentNode = this.buckets[i];
      while(currentNode) {
        counter++;
        console.log("Num: " + counter + " " + currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }

}



var myHT = new HashTable(30);


myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');
myHT.insert('Dean', 'deanmachine@gmail.com');

myHT.printAll();

console.log(myHT.get('Dean'));
