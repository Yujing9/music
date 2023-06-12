<template>
  <div class="itemMusicTop">
    <img v-if="albumData && albumData.length > 0" :src="albumData[0].images" alt="musicTop" class="bgimg" />

    <div class="itemLeft">
      <svg class="icon" aria-hidden="true" @click="handleBack">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      <span>歌曲</span>
    </div>

    <div class="itemRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ego-caidan"></use>
      </svg>
    </div>
  </div>
  <div class="itemTopContent">
    <div class="contentLeft">
      <img v-if="albumData && albumData.length > 0" :src="albumData[0].images" alt="" />
    </div>
    <div class="contentRight">
      <p v-if="albumData && albumData.length > 0" class="rightP_one">专辑</p>
      <div class="right_img">
        <span v-if="albumData && albumData.length > 0">{{ albumData[0].name }}</span>
      </div>
      <p class="rightP_two">
        <span v-if="albumData && albumData.length > 0">{{ albumData[0].artists[0].name }}-{{ albumData[0].label }}</span>
      </p>
    </div>
  </div>
  <div class="itemTopFooter">
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-pinglun1"></use>
      </svg>
      <span>评论</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang2"></use>
      </svg>
      <span>分享人数</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiazai1"></use>
      </svg>
      <span>下载</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-duoxuan"></use>
      </svg>
      <span>多选</span>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, defineProps } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  albumData: {
    type: Array,
    required: true,
  },
});

const handleBack = () => {
  router.back();
};


</script>
<style lang="less">
.itemMusicTop {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: .2rem;
  position: relative;
  .itemLeft,
  .itemRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.2rem;
    span {
      font-size: 0.4rem;
      color: #fff;
    }
    .icon {
      fill: #fff; //填充颜色
    }
  }
  .bgimg {
    width: 100%;
    height: 11rem;
    position: absolute;
    z-index: -1;
    filter: blur(30px);
  }
}
.itemTopContent {
  width: 100%;
  height: 3rem;
  padding: 0.2rem;
  margin-top: 0.4rem;
  display: flex;
  justify-content: space-between;
  .contentLeft {
    width: 36%;
    height: 2.6rem;
    position: relative;

    img {
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 0.2rem;
      position: absolute;
      z-index: -1;
    }

    .icon {
      width: 0.26rem;
      height: 0.26rem;
      margin-top: -0.02rem;
      vertical-align: middle;
      
    }
    span {
      font-size: 0.26rem;
      color: #fff;
    }
  }
  .contentRight {
    width: 60%;
    height: 2.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .rightP_one {
      font-size: 0.3rem;
      color: #fff;
      font-family: "微软雅黑";
    }
    .right_img {
      width: 100%;
      font-size: .4rem;
      font-weight: 900;
      height: 0.6rem;
      line-height: 0.6rem;
      color: #fff;
      img {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        vertical-align: middle;
      }
      span {
        margin-left: 0.1rem;
      }
      .icon {
        width: 0.26rem;
        height: 0.26rem;
        margin-top: -0.08rem;
        vertical-align: middle;
      }
    }
    .rightP_two {
      width: 100%;
      height: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        display: inline-block;
        width: 95%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.24rem;
        color: #fff;
      }
      .icon {
        width: 0.24rem;
        height: 0.24rem;
      }
    }
  }
}
.itemTopFooter {
  width: 100%;
  height: 1.4rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
  .footerItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    .icon{
      fill: #fff;
    }
    span {
      margin-top: 0.1rem;
    }
  }
}
</style>
