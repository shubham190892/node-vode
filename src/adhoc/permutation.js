/**
 * Problem: Given a set of elements, print all the permutation
 */

/**
 * Solution: recursive
 * Time: O(n!)
 * Space: O(n*2n) -> O(n^2)
 * Max depth of recursive stack is n (size of the set).
 */

function solve(cur, rem, n, allPerm) {
	if(cur.length === n){
		//console.log(cur);
		allPerm.push(cur);
		return;
	}
	for(let i in rem){
		const nextCur = [...cur];
		const nextRem = [...rem];
		const nextItem = nextRem.splice(i, 1);
		nextCur.push(nextItem[0]);
		solve(nextCur, nextRem, n, allPerm);
	}
}

function permute(items) {
	const allPerm = []
	solve([], items, items.length, allPerm);
	return allPerm;
}

module.exports = {
	permute: permute
};