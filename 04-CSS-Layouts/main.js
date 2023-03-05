function f(text, callbak) {
  setTimeout(function () {
    callbak(text);
  }, 0);
}

f("adsadasd", console.log);
