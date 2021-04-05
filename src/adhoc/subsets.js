/******************************************************************************
 * Problem: Generate all subsets of a given set
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Solution: Recursive, The choice between inclusion and exclusion of a item in a subset
 * Time: O(2^n)
 * Space: O(2^n)
 * Max depth of recursive stack is n (size of the set)
 * Help: By tutorial video
 ==============================================================================
 */

function solve(items) {
  if (items.length === 0) return [[]];
  const e = items[0];
  const rem = items.slice(1);
  const remSubSets = solve(rem);
  const allSubSets = [];
  for (const s of remSubSets) {
    allSubSets.push(s);
    allSubSets.push([...s, e]);
  }
  return allSubSets;
}

module.exports = {
  solve: solve
};
