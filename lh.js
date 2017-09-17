	if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
	myFunction();
    navigator.serviceWorker.register('./sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
function myFunction() {
	m = document.createElement("meta");
m.name="theme-color";
m.content = "#E6E6FA";
var n = document.getElementsByTagName("head")[0],
t = document.head.querySelector('[name="theme-color"]');
t ? n.appendChild(m) : n.insertBefore(m, n.firstChild);
	
	var e = document.createElement("link");
						e.rel = "manifest",
						e.href = "./manifest.json";
						var n = document.getElementsByTagName("head")[0],
						t = document.querySelector("link[rel=manifest]");
						t && t.getAttribute("href").indexOf("litefy") > -1 ? n.appendChild(e) : n.insertBefore(e, n.firstChild)

}

	
	
