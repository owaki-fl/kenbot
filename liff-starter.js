window.onload = function (e) {
  liff.init(function (data) {
    initializeApp(data)
  })
}
function initializeApp (data) {
  var color = '#' + parseInt(Math.random() * 0xffffff).toString(16)
  document.getElementById('sendmessagebutton').addEventListener('click', function () {
    liff.sendMessages([
      {
        type: 'template',
        altText: 'ラッキーカラー',
        template: {
          type: 'buttons',
          thumbnailImageUrl: 'https://{herokuに追加したウェブアプリのURL}/img/spacer.gif', // 背景はファイルサイズ抑えるため透過のGIF画像を入れて見ました
          imageAspectRatio: 'square',
          imageSize: 'contain',
          imageBackgroundColor: color,
          text: color + ' がラッキーそうです。',
          actions: [ // トーク内に表示される投稿からのリンクが設定できる
            {
              type: 'uri',
              label: 'ラッキーカラーを見てみよう',
              uri: 'line://app/1592931160-eddxlPXq' // ここにliffId
            }
          ]
        }
      }
    ]).then(function () {
      liff.closeWindow()
    }).catch(function (error) {
      window.alert('Error sending message: ' + error)
    })
  })
}
