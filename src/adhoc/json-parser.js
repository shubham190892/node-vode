/******************************************************************************
 * Problem: Write a program to parse the json data
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Solution: recursive implementation
 * Time: O(n)
 * Aux Space: O(?)
 ==============================================================================
 */
function isOpenBracket(char) {
  return char === '{' || char === '[';
}

function endOfValue(char) {
  return [',', '{', '}', '[', ']'].indexOf(char) !== -1;
}

function readValue(tokens) {
  let isStr = false;
  if (tokens.length > 0) {
    if (tokens[0] === '"') {
      isStr = true;
      tokens = tokens.slice(1, tokens.length - 1);
    }
    let valueStr = tokens.join('');
    valueStr = valueStr.trim();
    if (isStr) return valueStr;
    if (valueStr === 'true') return true;
    if (valueStr === 'false') return false;
    const num = Number(valueStr);
    if (isNaN(num)) throw new Error('Invalid token: ' + valueStr);
    return num;
  }
  return null;
}

function scan(cur, jsonStr) {
  while (jsonStr[cur] === ' ') cur++;
  let obj;
  if (isOpenBracket(jsonStr[cur])) {
    obj = jsonStr[cur] === '{' ? {} : [];
  } else {
    throw new Error('Opening bracket expected at: ' + cur);
  }
  cur++;
  while (true) {
    if (obj instanceof Array) {
      while (jsonStr[cur] === ' ') cur++;
      if (isOpenBracket(jsonStr[cur])) {
        const objValue = scan(cur, jsonStr);
        obj.push(objValue.obj);
        cur = objValue.pos;
      } else {
        const valueTokens = [];
        while (!endOfValue(jsonStr[cur])) valueTokens.push(jsonStr[cur++]);
        const value = readValue(valueTokens);
        if (value !== null) obj.push(value);
      }
    } else {
      while (jsonStr[cur] === ' ') cur++;
      if (jsonStr[cur] === '}') break;
      if (jsonStr[cur] !== '"')
        throw new Error('Key must start with " at: ' + cur);
      cur++;
      const keyTokens = [];
      while (jsonStr[cur] !== '"') keyTokens.push(jsonStr[cur++]);
      const key = keyTokens.join('');
      cur++;
      while (jsonStr[cur] === ' ') cur++;
      if (jsonStr[cur] !== ':') throw new Error(': required at -> ' + cur);
      cur++;
      while (jsonStr[cur] === ' ') cur++;
      if (isOpenBracket(jsonStr[cur])) {
        const objValue = scan(cur, jsonStr);
        obj[key] = objValue.obj;
        cur = objValue.pos;
      } else {
        const valueTokens = [];
        while (!endOfValue(jsonStr[cur])) valueTokens.push(jsonStr[cur++]);
        const value = readValue(valueTokens);
        if (value !== null) obj[key] = value;
      }
    }
    if (jsonStr[cur] !== ',') break;
    cur++;
  }
  return {obj: obj, pos: cur + 1};
}

function parse(value) {
  if (!value || value.length < 1) throw new Error('Value is null or empty');
  const result = scan(0, value);
  return result.obj;
}

module.exports = {
  parse: parse
};
