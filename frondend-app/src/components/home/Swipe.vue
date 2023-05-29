<template>
  <div>
    <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "Swipe",
  mounted() {
    console.log('Swipe mounted');
    axios
      .get('http://localhost:3000?realIP=116.25.146.177')
      .then(response => (this.info = response))
      .catch(function (error) { // 请求失败处理
        console.log(error);
    });
  },
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  },
  components: {},
};
</script>
<style lang="less" scoped>
.van-swipe {
  width: 100%;
  padding:10px;
  .van-swipe__track{
    .van-swipe-item{
      img{
        width: 100%;
        height: 3rem;
        border-radius: 0.1rem;
      }
    }
  }
  .van-swipe__indicators--active{
    background-color: rgb(219,130,130)
  }
}

</style>
