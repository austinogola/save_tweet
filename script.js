// chrome.storage.sync.get(['tab'],(res)=>{
//   console.log(res);
// })
//
//
// chrome.runtime.onMessage.addListener(function(request, sender) {
//  console.log(request.message);
// });

chrome.storage.local.get(['key'], function(result) {
  console.log('Value currently is ' + result.key);
});
