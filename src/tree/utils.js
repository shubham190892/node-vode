const Node = require('../core/node').Node;

function buildTree(items){
  if(items === null || items.length < 1) return null;
  const root = new Node(items[0]);
  items[0] = root;
  for(let i=1; i<items.length; ++i){
    const p = Math.floor((i-1)/2);
    if(items[i] === 'N' || items[p] === 'N') continue;
    const child = new Node(items[i]);
    items[i] = child;
    if(i%2 === 1){
      items[p].left = child;
    }else{
      items[p].right = child;
    }
  }
  return root;
}

module.exports = {
  buildTree: buildTree
}