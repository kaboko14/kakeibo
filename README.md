# zaKKuri
現金の入出金をざっくりと記録するためのアプリです。
※このアプリは開発途中です。

## 機能一覧
[zaKKuri_機能一覧.pdf](https://github.com/kaboko14/kakeibo/files/5272574/zaKKuri_.pdf)
#### 履歴画面
<table>
  <thead>
    <tr>
      <th>機能</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>履歴の確認</td>
      <td>
        タグで全て・出金・入金の履歴を切り替えることが出来ます。
      </td>
    </tr>
    <tr>
      <td>履歴の削除</td>
      <td>
        履歴は削除することが可能です。
      </td>
    </tr>
  </tbody>
</table>

#### 品目登録画面
<table>
  <thead>
    <tr>
      <th>機能</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>登録品目一覧</td>
      <td>
        登録済みの品目一覧を確認できます。<br>
        タグで出金・入金を切り替えることができます。
      </td>
    </tr>
    <tr>
      <td>品目の編集・削除</td>
      <td>
        登録済みの品目をクリックすると編集用のモーダルが開き、内容の更新・品目削除が可能です。<br>
        品目フォームが未入力の場合は内容の更新が出来ません。
        品目のみの登録（金額未入力）は可能です。
      </td>
    </tr>
    <tr>
      <td>品目の新規登録</td>
      <td>
        新規で品目を登録することが出来ます。<br>
        出金品目登録・入金品目登録の切り替えは「登録品目一覧」のタグで出来ます。<br>
        品目フォームが未入力の場合は登録が出来ません。<br>
        品目のみの登録（金額未入力）は可能です。
      </td>
    </tr>
  </tbody>
</table>

## 実行方法

```
$ git clone https://github.com/kaboko14/kakeibo.git
$ npm install
$ npm run serve
```

## 使用言語・環境
Vue.js + Firestore + FirebaseAuthentication
