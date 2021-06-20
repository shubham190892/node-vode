/******************************************************************************
 * Problem: Multiply tow numbers given as string
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Solution: Native multiplication method
 * Time: O(n1*n2)
 * Aux Space: O(n1+n2)
 ==============================================================================
 */

function multiply(s1, s2) {
  let s1Neg = 0;
  let s2Neg = 0;
  if (s1[0] === '-') {
    s1Neg = 1;
    s1 = s1.slice(1);
  }
  if (s2[0] === '-') {
    s2Neg = 1;
    s2 = s2.slice(1);
  }
  let neg = s1Neg ^ s2Neg;
  let l1 = s1.length;
  let l2 = s2.length;
  let t = l1 + l2;
  let ans = new Array(t).fill(0);
  let carry = 0;
  let ansPos = t - 1;
  for (let b = l1 - 1; b >= 0; b--) {
    for (let m = l2 - 1; m >= 0; m--) {
      const bDigit = parseInt(s1[b]);
      const mDigit = parseInt(s2[m]);
      const bPos = l1 - b - 1;
      const mPos = l2 - m - 1;
      ansPos = t - (bPos + mPos) - 1;
      let mul = bDigit * mDigit + ans[ansPos] + carry;
      ans[ansPos] = mul % 10;
      carry = Math.floor(mul / 10);
    }
    ansPos--;
    while (carry > 0) {
      ans[ansPos] = carry % 10;
      carry = Math.floor(carry / 10);
      ansPos--;
    }
  }
  let i = 0;
  while (ans[i] === 0) i++;
  ans = ans.slice(i);
  if (ans.length === 0) {
    neg = 0;
    ans.push(0);
  }
  return (neg === 1 ? '-' : '') + ans.join('');
}

module.exports = {
  multiply: multiply
};
