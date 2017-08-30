//*****************          CODE FIGHTS         *****************\\


// Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.

// Given a singly linked list of integers, determine whether or not it's a palindrome.

// Example

// For l = [0, 1, 0], the output should be
// isListPalindrome(l) = true;
// For l = [1, 2, 2, 3], the output should be
// isListPalindrome(l) = false.


// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }



//REVERSING LINKED LIST TO CHECK FOR PALINDRONE (1st Solution):
function isListPalindrome(l) {

    var curr = l;
    var array = [];
    var prev = null;
    var next = null;
    var i = 0;
    //Reverse Linked list and push orinal Linked list to array.
    while (curr) {
      array.push(curr.value);
      next = curr.next; // save next node (since we are getting rid of pointer)
      curr.next = prev; // get rid of old pointer.
      prev = curr; // update pointer (reverse)
      curr = next; // go to next;
    }

    //compare list to reversed list. if palindrome return true;
    while (prev) {
      if(array[i] === prev.value){
          prev = prev.next;
          i++;
      }
      else return false;
    }
    return true;
}

//push linked list to array Reverse array and check palindrome. (2nd solution.)
function isListPalindrome(l) {
    var curr = l;
    var array = [];
    while(l){
        array.push(l.value);
        l = l.next;
    }

    for (i = array.length - 1; i >= 0; i--){

        if(array[i] === curr.value){
            curr = curr.next;
        }
        else return false;
    }
    return true;
}
