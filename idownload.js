javascript: (function () {
  var iDownload = {
    iAsk: window.confirm('Do you want to take the opened page address?'),
    iLocation: window.location.href,
    Y2mate: 'https://www.y2mate.com/download-youtube/',
    iSupport: ['www.youtube.com', 'youtube.com', 'youtu.be']
  };
  var iVersion = {
    iName: 'iDownload',
    iType: 'Bookmarklet',
    iNumber: '2.8',
    iAuthor: 'Dayan',
    iUpdated: '05/04/2020',
    iOfficialWebsite: '\'https://github.com/dayan-dev/idownload\''
  };
  console.clear();
  console.log('-------------------------');
  console.log('Original ' + iVersion.iName + ' ' + iVersion.iType + ' by ' + iVersion.iAuthor + '.' + ' Latest ' + iVersion.iNumber + ' updated on: ' + iVersion.iUpdated + '.' + ' Download the newest version at ' + iVersion.iOfficialWebsite + '.');
  console.log('-------------------------');

  function iFun(iURL) {
    window.open(iDownload.Y2mate + encodeURIComponent(iURL.substring(((iURL.indexOf("v=")) + 2))), 'Y2mate');
    console.log('The URL provided is: ' + '\'' + decodeURIComponent(iURL) + '\'' + ' from Y2mate');
  };
  if (iDownload.iAsk === true) {
    if (iDownload.iSupport.includes(window.location.hostname) && window.location.pathname.length > 1) {
      iFun(iDownload.iLocation);
      window.history.back();
    } else {
      alert('The URL of the opened page is invalid.');
      console.log('The URL of the opened page is invalid.');
    }

  } else if (iDownload.iAsk === false) {
    var iAskURL = prompt('Please enter a valid URL.', 'Valid URL');
    if (iAskURL != null) {
      var iAskURLHost = iAskURL.split('\/');
      if (iDownload.iSupport.includes(iAskURLHost[2]) && iAskURLHost[3].length > 1) {
        iFun(iAskURL);
        console.log('The URL provided is: ' + '\'' + decodeURIComponent(iAskURL) + '\'');
      } else {
        alert('The provided URL is invalid.');
        console.log('The provided URL is invalid.');
      }
    } else {
      console.log('There are no files available for download.');
    }
  }
})();
