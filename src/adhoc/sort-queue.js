
/**
 * Problem: Sort the elements of a queue without using extra space or recursion
 * Queue has only two std methods -> enqueue and dequeue
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
function sort(queue) {
    const n = queue.size();
    if(n <= 1) return queue;
    for(let i = 0; i<(n-1); ++i){
        let top = queue.dequeue();
        for(let j = 0; j<(n-1); ++j){
            const e = queue.dequeue();
            if(top > e){
                queue.enqueue(e);
            }else{
                queue.enqueue(top);
                top = e;
            }
        }
        queue.enqueue(top);
    }
    return queue;
}

module.exports = {
    sort: sort
};

