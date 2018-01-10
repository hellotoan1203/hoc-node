 var FB=require('fb')
 FB.setAccessToken('EAACEdEose0cBAE5J7iRYbk1E8FQGW9vPh0lFTzKGX52eHCqEqRAlMyMndewNsjKZCL6dWfVKBEZAvr7BChvgE1ExMCmwrsby7PoK1Knd94EKvZC00QweFbrhRjTpX86cSVuIY9aK3Yi0iY7EwIzxc0Lt4TizCesnC7ZCOBdws1D76uP0Q7aB7cz3ImL96Wgjn0pM7iNAZBQZDZD');
 FB.api('456310168037154/comments ', function (res) {
  if(!res || res.error) {
   console.log(!res ? 'error occurred' : res.error);
   return;
  }
  console.log(res.message);
});
