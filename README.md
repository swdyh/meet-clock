# meet-clock
A Chrome extension that displays a clock at the entrance to Google Meet.  
GoogleMeetの入り口に時計を表示するChrome拡張です

<img width="80%" alt="screen" src="https://user-images.githubusercontent.com/9168/164884494-32914be6-9079-4436-8224-d2976bf84bbb.png">

↑の 「16:09:11」の部分です。

## インストール

1. https://github.com/swdyh/meet-clock/releases から ソースコードをダウンロードし、適当な場所におきます。
2. ソースコードの中身を確認し、悪意のあるコードを含まないかを確認します。content_meet.jsで20行のjavascriptファイルです。
3. chrome://extensions/ を開き「パッケージ化されていない拡張機能を読み込む」からソースコードの置いたディレクトリを指定します。
デベロッパーモードを有効にする必要があります

## 注意
GoogleMeetの入り口の画面で1秒に1回処理を動かし時間を表示しています。
他にはなにもしていませんが、必要に応じてソースコードを確認してください。

## License
Apache-2.0 License
