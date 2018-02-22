(function () {
  'use strict';
  //Javascript Parser
  function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  // Certain minor words should be left lowercase unless 
  // they are the first or last words in the string
  lowers = ['jumps', 'the', 'over'];
  for (i = 0, j = lowers.length; i < j; i++)
    str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'), 
      function(txt) {
        return txt.toLowerCase();
      });
  }
  titleCase();
 
})();