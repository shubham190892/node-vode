const ncr = require('./nCr');

describe('nCr', () => {
  it('should return all the combinations', () => {
    const input = ['🐙', '🦋', '🐬', '🐥', '🐖'];
    const out = ncr.solve(input, 3);
    console.log(out);
    const ans = [
      ['🐙', '🦋', '🐬'],
      ['🐙', '🦋', '🐥'],
      ['🐙', '🦋', '🐖'],
      ['🐙', '🐬', '🐥'],
      ['🐙', '🐬', '🐖'],
      ['🐙', '🐥', '🐖'],
      ['🦋', '🐬', '🐥'],
      ['🦋', '🐬', '🐖'],
      ['🦋', '🐥', '🐖'],
      ['🐬', '🐥', '🐖']
    ];
    expect(out).toStrictEqual(ans);
    expect(ncr.solve([], 0)).toStrictEqual([[]]);
    expect(ncr.solve(['🐬'], 1)).toStrictEqual([['🐬']]);
  });
});

describe('nCrBySubsets', () => {
  it('should return all the combinations', () => {
    const input = ['🐙', '🦋', '🐬', '🐥', '🐖'];
    const out = ncr.solveBySubsets(input, 3);
    console.log(out);
    const ans = [
      ['🐬', '🦋', '🐙'],
      ['🐥', '🦋', '🐙'],
      ['🐥', '🐬', '🐙'],
      ['🐥', '🐬', '🦋'],
      ['🐖', '🦋', '🐙'],
      ['🐖', '🐬', '🐙'],
      ['🐖', '🐬', '🦋'],
      ['🐖', '🐥', '🐙'],
      ['🐖', '🐥', '🦋'],
      ['🐖', '🐥', '🐬']
    ];
    expect(out).toStrictEqual(ans);
    expect(ncr.solveBySubsets([], 0)).toStrictEqual([[]]);
    expect(ncr.solveBySubsets(['🐬'], 1)).toStrictEqual([['🐬']]);
  });
});
