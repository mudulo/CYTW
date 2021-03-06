chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        
        var href = new URL(details.url)
        //alert(href);
        //alert(details.url.hostname + details.url.pathname)
        if( (href.hostname == "www.youtube.com"  || href.hostname == "youtube.com") && href.pathname == "/" ){
            return {
                redirectUrl : chrome.extension.getURL("pages/youtube.html")
            };
        } else if( (href.hostname == "www.twitter.com"  || href.hostname == "twitter.com") && href.pathname == "/" ){
            return {
                redirectUrl : chrome.extension.getURL("pages/twitter.html")
            };
        } else if( (href.hostname == "www.reddit.com"  || href.hostname == "reddit.com") && href.pathname == "/" ){
            return {
                redirectUrl : chrome.extension.getURL("pages/reddit.html")
            };
        } else {
            return
        }
    },
    {urls: ['*://*.youtube.com/*', '*://twitter.com/*', '*://reddit.com/*'], types: ['main_frame']},
    ['blocking']
);