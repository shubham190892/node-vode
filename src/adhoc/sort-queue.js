
/**
 * Problem: Sort the elements of a queue without using extra space or recursion
 * Queue has only two std methods -> pushBack and popFront
 */

/**
 * Solution: Bubble sort idea can be used
 * Top(var) is being pushed back to the queue
 * So sorting will be ASC if top is heaviest element
 * Time: O(n^2)
 * Space: O(1)
*/


/**
 * @param queue: Queue
 */

function solve(queue) {
    const n = queue.size();
    if(n <= 1) return queue;
    for(let i = 0; i<(n-1); ++i){
        let top = queue.popFront();
        for(let j = 0; j<(n-1); ++j){
            const e = queue.popFront();
            if(top > e){
                queue.pushBack(e);
            }else{
                queue.pushBack(top);
                top = e;
            }
        }
        queue.pushBack(top);
    }
    return queue;
}

module.exports = {
    solve: solve
};

