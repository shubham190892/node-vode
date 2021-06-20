const m = require('./multiply-2-string-number');

describe('multiply-2-number-string', () => {
  it('should return string number for multiplication', () => {
    expect(m.multiply('322', '2')).toEqual('644');
    expect(m.multiply('345987', '983')).toEqual('340105221');
    expect(m.multiply('345987', '-983')).toEqual('-340105221');
    expect(m.multiply('-345987', '983')).toEqual('-340105221');
    expect(m.multiply('-345987', '-983')).toEqual('340105221');
    expect(m.multiply('0', '983')).toEqual('0');
    expect(m.multiply('0', '0')).toEqual('0');
    expect(m.multiply('0', '-32')).toEqual('0');
  });
});
