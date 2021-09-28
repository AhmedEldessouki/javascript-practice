class DoublyLinkedListNode {
  data: number;
  next: DoublyLinkedListNode | null;
  prev: DoublyLinkedListNode | null;

  constructor(nodeData: number) {
    this.data = nodeData;
    this.next = null;
    this.prev = null;
  }
}

function sortedInsert(
  llist: DoublyLinkedListNode,
  data: number
): DoublyLinkedListNode {
  // Write your code here
  if (!llist) return { data, next: null, prev: null };
  if (data < llist.data) {
    llist = {
      data,
      next: llist,
      prev: null,
    };
    if (llist.next) llist.next.prev = llist;
    return llist;
  }
  const arr: number[] = [];

  while (llist) {
    arr.push(llist.data);
    llist = llist.next;
  }
  arr.reverse();
  for (const num of arr) {
    if (data > num) {
      llist = {
        data,
        next: llist,
        prev: null,
      };
      if (llist.next) llist.next.prev = llist;
      data = null;
    }
    llist = {
      prev: null,
      data: num,
      next: llist,
    };
    if (llist.next) llist.next.prev = llist;
  }
  return llist;
}
