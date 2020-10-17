<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe66a;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63a;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      北京
      <span class="iconfont">&#xe642;</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeHeader',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
@import 'style/varibles.scss';
.header {
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  background: $bg-color;
  color: #fff;

  &-left {
    height: 46px;
    width: 32px;
    line-height: 46px;
    text-align: center;
  }

  &-input {
    flex: 1;
    border-radius: 4px;
    height: 34px;
    line-height: 34px;
    background: #fff;
    padding-left: 10px;
    color: #ccc;
  }

  &-right {
    width: 60px;
    height: 46px;
    line-height: 46px;
    text-align: center;
  }
}
</style>
