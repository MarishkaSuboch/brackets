module.exports = function check(str, bracketsConfig) {

  const open = new Set(bracketsConfig.map(pair => pair[0]));
  const close  = new Set(bracketsConfig.map(pair => pair[1]));
  const pairs = bracketsConfig.reduce((acc, [open, close]) => ({...acc, [close]: open}), {});
  let stack = []

 for(const ch of str)
  {
      if(open.has(ch) && close.has(ch))
      {
        if(stack.length === 0)
        {
          stack.push(ch);
        }
        else
        {
          let prev = stack.pop();
          if(prev !== ch)
          {
            stack.push(prev); 
            stack.push(ch);     
          }
          else
          {
            if (pairs[ch] !== prev) return false;
          }
        }
      }
      else
      {
      if (open.has(ch)) {
          stack.push(ch);
      }
      if (close.has(ch)) {
        if (pairs[ch] !== stack.pop()) return false;
      }
    }
  }
  return stack.length === 0;
}
