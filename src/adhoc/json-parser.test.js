const jp = require('./json-parser');

describe('json-parser', () => {
  it('empty-array', () => {
    const res = jp.parse('[]');
    expect(res).toEqual([]);
  });
  it('simple-array', () => {
    let res = jp.parse('[    25,     true, "hello", false, false]');
    expect(res).toEqual([25, true, 'hello', false, false]);
    res = jp.parse('[1, 2, 3, 4, 5]');
    expect(res).toEqual([1, 2, 3, 4, 5]);
  });

  it('empty-json', function () {
    const res = jp.parse('{}');
    expect(res).toEqual({});
  });
  it('simple-json', function () {
    const res = jp.parse('{"hello": "world", "j": true, "v": 45.7}');
    expect(res).toEqual({hello: 'world', j: true, v: 45.7});
  });

  it('nested-json', function () {
    const res = jp.parse(
      '{"hello": "world", "j": {"Jadu": {"hello": "world", "j": true, "v": 45.7}}, "v": 45.7, "ls": [3,"Gist",[2,2,4,5], {"kk": false}]}'
    );
    expect(res).toEqual({
      hello: 'world',
      j: {Jadu: {hello: 'world', j: true, v: 45.7}},
      ls: [3, 'Gist', [2, 2, 4, 5], {kk: false}],
      v: 45.7
    });
  });
});
