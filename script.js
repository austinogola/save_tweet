// chrome.storage.sync.get(['tab'],(res)=>{
//   console.log(res);
// })
//
//
// chrome.runtime.onMessage.addListener(function(request, sender) {
//  console.log(request.message);
// });

// chrome.storage.local.get(['url'], function(result) {
//   console.log('Value currently is ' + result.url);
//   console.log(result);
// });

// chrome.runtime.onMessage.addListener(function(request, sender) {
//   console.log('This works');
//   console.log(request.message);
// });

// chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//     console.log("Received %o from %o, frame", msg, sender.tab, sender.frameId);
//     sendResponse("Gotcha!");
// });
var clickedEl = null;

document.addEventListener("contextmenu", function(event){
    clickedEl = event.target;
}, true);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request == "getClickedEl") {
        sendResponse({value: clickedEl.value});
    }
});
