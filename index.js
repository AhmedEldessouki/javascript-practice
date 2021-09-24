function hasCycle(head) {
  let nodes = [];
  while (head) {
    nodes.push(head.data);
    head = head.next;
  }
  nodes = nodes.reduce((acc = [], item, i, arr) => {
    if (i < arr.length - 1) acc.push([item, arr[i + 1]]);
    return acc;
  }, []);
  for (const node of nodes) {
    if (nodes.find((item) => item === node.reverse())) return 1;
  }
  return 0;
}

let nodeList = {
  data: 1,

  next: { data: -1, next: { data: 1, next: null } },
};
console.log(hasCycle(nodeList));
nodeList = { data: -1, next: null };
// console.log(hasCycle(nodeList));
