<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use></svg
      >每日推荐
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangmoban"></use></svg
      >私人FM
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gequ"></use></svg
      >歌单
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use></svg
      >排行榜
    </div>
  </div>
</template>
<script setup></script>
<style lang="less">
.iconList {
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
  width: 100%;
  height: 2rem;
  align-items: center;
  .iconItem {
    display: flex;
    flex-direction: column;
    width: 25%;
    align-items: center;
    height: 100%;
    .icon {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
