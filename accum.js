// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(str){
  var count = 1;
  var newStr = "";
  
  for(var i = 0; i < str.length; i++) {
    
    newStr = newStr+ str[i].toUpperCase();
    
    for(var s= 1; s< count; s++) {
      newStr = newStr+ str[i].toLowerCase();
    }
    
    count++;
    
    if(i != (str.length - 1)) {
      newStr =newStr+ '-';
    }
  }
  
  return newStr;
}
        
    