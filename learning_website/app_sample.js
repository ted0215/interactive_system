let req;

function requestRandom(max) {
  let num = Math.ceil(Math.random() * max);

  fn = "100_0"+("0"+num).slice(-2)+".txt";
  console.log(fn);
  requestFile(fn);
}

function requestFile(fileName) {
  // fetchのお作法は、
  // テキストを返してくれる関数ができるのを待つ
  // その関数がテキストを返してくれるのを待つ
  // 一文で書けるのが良いが、thenが2段階になるのはイマイチ
  fetch(fileName)
    .then(response => {return response.text();})
    .then(text => {rewrite("txt", text);});

/*
  // うまく行かない例（いそいじゃあ、だめ）
  fetch(fileName)
    .then(response => {rewrite("txt", response.text());});
*/

/*
  // 動作確認済　関数の表記が異なるもの
  fetch(fileName)
    .then(function(response){return response.text();})
    .then(function(text){rewrite("txt", text);});
*/

/*
  // 動作確認済
  fetch(fileName)
    .then(response => {
      response.text()
        .then(text => {
          rewrite("txt", text);
        })
    });
*/

/*
  // fetchの引数が異なる場合、動作確認済
  let req = new Request(fileName, {method: "get"});
  fetch(req)
    .then(response => {return response.text();})
    .then(text => {rewrite("txt", text);});
*/

/*
  // クラシックな XMLHttpRequest オブジェクト、動作確認済
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open('GET', fileName ,true);
  xmlHttpReq.onreadystatechange = function() {
    if (xmlHttpReq.readyState==4) {
      rewrite("txt", xmlHttpReq.responseText);
    }
  }
  xmlHttpReq.send(null);
*/
}

function rewrite(id, txt) {
  document.getElementById(id).innerHTML = txt;
}