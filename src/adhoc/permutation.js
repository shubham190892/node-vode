/******************************************************************************
 * Problem: Given a set of elements, print all the permutation
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Solution: recursive
 * Time: O(n!)
 * Space: O(n*2n) -> O(n^2)
 * Max depth of recursive stack is n (size of the set).
 ============================================================================== 
 */

/**
 * @param cur -> generating permutation
 * @param rem -> remaining items, to be picked into permutation
 * @param n -> size of the given set
 */
function permute(cur, rem, n) {
	if(cur.length === n){
		return [cur];
	}
	let allPerm = [];
	for(let i=0; i<rem.length; i++){
		const nextCur = [...cur];
		const nextRem = [...rem];
		const nextItem = nextRem.splice(i, 1);
		nextCur.push(nextItem[0]);
		allPerm = allPerm.concat(permute(nextCur, nextRem, n));
	}
	return allPerm;
}

function solve(items) {
	return permute([], items, items.length);
}

module.exports = {
	solve: solve
};