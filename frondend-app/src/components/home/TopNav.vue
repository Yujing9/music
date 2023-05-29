<template>
  <div class="topNav">
    <div class="topLeft">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-liebiao"></use>
    </svg>
</div>
    <div class="topContent">
      <span> 我的 </span>
      <span class="active"> 发现 </span>
      <span> 云村 </span>
      <span> 视频 </span>
    </div>
    <div class="topRight">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-search"></use>
    </svg>
</div>
  </div>
</template>
<script>

export default {
  name: "TopNav",
  components: {},
};
</script>
<style lang="less" scoped>
.topNav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: .2rem;
  align-items: center;
  .topContent{
    display: flex;
    justify-content: space-around;
    width: 65%;
    height: 100%;
    align-items: center;
    font-size: .36rem;
    .active{
      font-weight: 900;

    }
  }
}
</style>
