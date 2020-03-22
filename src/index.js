module.exports = function check(str, bracketsConfig) {
  let brackets = []
  for(var i = 0 ; i < bracketsConfig.length ; i++){
    brackets.push(bracketsConfig[i][0]+bracketsConfig[i][1]);
  }
  for (var i = 0; i < str.length; i++) {
    if( str.includes(brackets[i]) ) {
      str = str.replace(brackets[i], "");
      i = -1;
    }
  }
  if(str.length === 0){return true}
  else{return false}
}
