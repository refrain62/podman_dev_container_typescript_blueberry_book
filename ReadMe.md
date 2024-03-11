# podman で　VSCのdev container 
https://blog.kinto-technologies.com/posts/2022-12-10-VSCodeDevContainer/ をベース

https://github.com/refrain62/typescript_blueberry_book
の内容を移植

## 6.を実行する前にファイルの調整
devcontainer.json ファイルの最後のroot操作を有効に
```
	// Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
	"remoteUser": "root"
  ```

## コンテナに接続したあと、コンパイル＆実行
```
$ cd ./practice/src
$ npx tsc
$  node ../dist/2/2.1/index.js
```
