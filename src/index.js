module.exports = function check(str, bracketsConfig) {
  let br = "(){}[]";
  let st = [];
  
  for (let i = 0; i < str.length; i++) {

      let char = str[i];
      let index = br.indexOf(char);
      
      if (index >= 0) {
        
          if (index & 1) {
              
              if (!st.length) return false;
              
              let last_br = st.pop();
              
              if (last_br != br[index - 1]) return false;
          } else { 
              
              st.push(char);
          }


      }
  }

  return !st.length;
}
