/******************************************************************************
 * Problem: Given a set of elements and size of selection set,
 * print all the combinations
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Solution(nCrBySubsets): Using the idea of generating all subsets with
 *  constraint(max size of a subset is r) and then filter out the subsets of size r
 * Time: O(nCr)
 * Space:
 *
 *Solution(nCr): Backtrack paradigm
 * Time: O(nCr)
 * Space:
 ==============================================================================
 */

function backtrack(cur, items, r) {
  if (cur.length === r) return [cur];
  let ncr = [];
  for (let i = 0; i < items.length; i++) {
    const res = backtrack([...cur, items[i]], items.slice(i + 1), r);
    ncr = ncr.concat(res);
  }
  return ncr;
}

function solve(items, r) {
  return backtrack([], items, r);
}

function subsets(items, r) {
  if (items.length === 0) return [[]];
  const e = items[0];
  const rem = items.slice(1);
  const remSubSets = subsets(rem, r);
  const allSubSets = [];
  for (const s of remSubSets) {
    allSubSets.push(s);
    if (s.length < r) {
      allSubSets.push([...s, e]);
    }
  }
  return allSubSets;
}

function solveBySubsets(items, r) {
  if (r > items.length) return [];
  const subSets = subsets(items, r);
  return subSets.filter(s => s.length === r);
}

module.exports = {
  solve: solve,
  solveBySubsets: solveBySubsets
};
