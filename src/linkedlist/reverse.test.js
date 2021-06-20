const r = require('./reverse');
const lu = require('./utils');
const Node = require('../core/node').ListNode;
const R = require('ramda');


function reverseCheck(h1, h2){
  let a1 = lu.getArrayFromLinkedList(h1);
  let a2 = lu.getArrayFromLinkedList(h2);
  let a2Rev = R.reverse(a2);
  expect(a1).toEqual(a2Rev);
}


describe('reverse-linked-list', () => {
	it('should return reversed linked list', () => {
        let head = null;
        let tail = null;
        expect(r.reverse(head)).toBe(null);
        head = lu.getLinkedListFromArray([4]);
        let rHead = r.reverse(head)
        reverseCheck(head, rHead);
        head = lu.getLinkedListFromArray([4,6,7,8]);
        let cHead = lu.cloneLinkedList(head);
        rHead = r.reverse(head);
        reverseCheck(cHead, rHead);
	});
});