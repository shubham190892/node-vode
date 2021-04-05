const nq = require('./n-queen');

describe('n-queen', () => {
  let n, out;
  it('should return the valid placements of 4 queens', () => {
    n = 4;
    out = nq.solve(n);
    console.log('N:', n, ', Solutions:', out.length);
    for (const o of out) console.log(o);
    const ans_4_queens = [
      '▦ ♕ ▦ ☷\n☷ ▦ ☷ ♕\n♕ ☷ ▦ ☷\n☷ ▦ ♕ ▦\n',
      '▦ ☷ ♕ ☷\n♕ ▦ ☷ ▦\n▦ ☷ ▦ ♕\n☷ ♕ ☷ ▦\n'
    ];
    expect(out).toStrictEqual(ans_4_queens);
  });

  it('should should return the valid placements of 8 queens', function () {
    n = 8;
    out = nq.solve(n);
    console.log('N:', n, ', Solutions:', out.length);
    for (const o of out) console.log(o);
  });
});
