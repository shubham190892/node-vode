const sqe = require('./sort-queue');
const Queue = require('../core/queue').Queue;

describe('queue-sort', () => {
  it('should sort the queue elements', () => {
    let q = new Queue([9, 2, 8, 1, 4]);
    expect(sqe.solve(q).items).toStrictEqual([1, 2, 4, 8, 9]);

    q = new Queue([-6, 7, 3, 5, -4]);
    expect(sqe.solve(q).items).toStrictEqual([-6, -4, 3, 5, 7]);
  });
});
