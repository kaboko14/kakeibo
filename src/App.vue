<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        入力
      </router-link> |
      <router-link to="/history">
        履歴
      </router-link> |
      <router-link to="/library">
        品目登録
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import './styles/HTML5_Doctor_CSS Reset.css';
* {
  box-sizing: border-box;
  font-family: "Yu-Gothic",sans-serif;
  color: #333;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;

}
</style>
