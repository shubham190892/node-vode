/******************************************************************************
 * Problem: Reverse the linked list
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Solution:
 * Time: O(N)
 * Auxiliary Space: O(1)
 ==============================================================================
 */

function reverse(head) {
  if (head === null) return head;
  let pre = null;
  let cur = head;
  let nxt = head.next;
  while (nxt !== null) {
    cur.next = pre;
    pre = cur;
    cur = nxt;
    nxt = nxt.next;
  }
  cur.next = pre;
  return cur;
}

module.exports = {
  reverse: reverse
};
