const cb = require('./check-bst');
const Node = require('../core/node').Node;
const TU = require('../tree/utils');

describe('check-bst', () => {
	it('null-root', () => {
        expect(cb.solve(null)).toBeTruthy();
	});
	it('just-root', function() {
		let root = new Node(7);
		expect(cb.solve(root)).toBeTruthy();
	});

	it('normal-tree', function() {
			let root = TU.buildTree([15, 7, 16, 1, 12, 'N', 'N', 'N', 2, 10, 14]);
			expect(cb.solve(root)).toBeTruthy();
		root = TU.buildTree([15, 7, 16, 1, 12, 'N', 'N', 'N', 2, 10, 16]);
		expect(cb.solve(root)).toBeFalsy();
	});
});