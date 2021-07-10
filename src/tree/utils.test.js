const TU = require('./utils');

describe('tree-utils', () => {
  it('should return a complete binary from a given array', () => {
    let root = TU.buildTree([7, 1, 3, 4]);
    expect(root.value).toBe(7);
    expect(root.left.value).toBe(1);
    expect(root.right.value).toBe(3);
    expect(root.left.left.value).toBe(4);

    root = TU.buildTree([7, 1, 'N', 4]);
    expect(root.value).toBe(7);
    expect(root.left.value).toBe(1);
    expect(root.right).toBeNull();
    expect(root.left.left.value).toBe(4);

    console.log('Done');
  });
});
