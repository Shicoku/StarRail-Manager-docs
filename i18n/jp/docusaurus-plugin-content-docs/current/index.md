---
sidebar_position: 0
sidebar_label: トップページ
slug: /
---

# StarRail Manager

## 概要
StarRail Managerは、node.js用のMiHoMo APIラッパー、スターレイルのデータを取得するライブラリです。\
**これは崩壊: スターレイルの公式プロジェクトではありません。**


#### ⚠️ **Warning**
**このプロジェクトは現在ベータ版です。\
今後のアップデートで大きく変更される可能性があります。**

## インストール

```
$ npm install starrail-manager
```

## クローン
このパッケージを使用するには、以下の2つのリポジトリをクローンする必要があります。

1. [StarRailScore](https://github.com/Mar-7th/StarRailScore)
```
$ git clone https://github.com/Mar-7th/StarRailScore.git
```

2. [StarRailRes](https://github.com/Mar-7th/StarRailRes)
```
$ git clone https://github.com/Mar-7th/StarRailRes.git
```

## 使い方
### MiHoMo API取得
```js
const { Client } = require("starrail-manager");

const client = new Client({lang: "jp"}); // デフォルトはen(英語)
const mihomoData = await client.getUserData(830647229);
console.log(mihomoData);
```

### ビルドカード作成
```js
const { Client } = require("starrail-manager");
const fs = require("fs");

const client = new Client();
client.createImg(830647229, 0).then((canvas) => {
  fs.writeFileSync("output.png", canvas.toBuffer());
});
```

#### ⚠️ **Warning**
**ビルドカードの作成は日本語にのみ対応しています。**

### キャラクターのデータを取得する
```js
const { Character } = require("starrail-manager");

const char = new Character({lang: "jp"});
const charData = char.getCharBase(1001);
console.log(charData.name);

// result
// 三月なのか
```

### 光円錐のデータを取得する
```js
const { LightCone } = require("starrail-manager");

const light_cone = new LightCone({lang: "jp"});
const data = light_cone.getData(22001);
console.log(data.name);

// result
// よぉ、ここにいるぜ
```

# APIとデータ
## API
本パッケージでは`MiHoMo API`を使用しています。\
**[MiHoMo API](https://march7th.xyz/en/)**

## データ
キャラクターデータ、光円錐データ、およびその他のデータは`StarRailRes`を参照しています。\
**[StarRailRes](https://github.com/Mar-7th/StarRailRes)**\
また、スコア計算に使用する重要度データは`StarRailScore`を参照しています。\
**[StarRailScore](https://github.com/Mar-7th/StarRailScore)**

[チェンジログ](https://github.com/Shicoku/StarRail-Manager/tree/main/doc/changelog.md)はこちらからみることができます。