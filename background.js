chrome.runtime.onInstalled.addListener(()=>{
    chrome.contextMenus.create({
      "title": 'Crop tweet stats',
      "contexts": ["all"],
      "id": "croppedOption",
      "documentUrlPatterns":['*://*.twitter.com/*']

    })
    chrome.contextMenus.create({
      "title": 'Show whole tweet',
      "contexts": ["all"],
      "id": "fullOption",
      "documentUrlPatterns":['*://*.twitter.com/*']

    })
})

chrome.contextMenus.onClicked.addListener(async(info,tab)=>{
  const url=await getCurrentTab()
  // chrome.tabs.create({
  //     url: url
  //   });
  chrome.storage.local.set({test: 'test_value'}, function() {
    console.log('Value is set to ');
  });
})




async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let tab = await chrome.tabs.query(queryOptions);
  return tab[0].url;

}

const url=getCurrentTab()







// const value='valll'
// chrome.storage.local.set({key: value}, function() {
//   console.log('Value is set to ' + value);
// });
// chrome.storage.local.get(['key'], function(result) {
//   console.log('Value currently is ' + result.key);
// });

chrome.storage.local.set({url:url},async()=>{
  const link= await getCurrentTab()
  console.log(`url has been set to ${link}`);
  // chrome.storage.
})

// chrome.tabs.getSelected(null, function(tab) {
//   chrome.tabs.sendMessage(tab.id, { message: "TEST" });
// });

chrome.runtime.sendMessage({text: "hey"}, function(response) {
    console.log("Response: ", response);
});



// chrome.tabs.getSelected(null, function(tab) {
//   chrome.tabs.sendMessage(tab.id, { message: "TEST" });
// });
