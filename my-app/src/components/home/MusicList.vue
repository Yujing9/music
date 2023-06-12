<template>
  <div class="musicList">
    <div class="musicTop">
      <span class="title">发现好歌曲</span>
      <span class="more">查看更多</span>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="300"
        class="my-swipe"
        :show-indicators="false"
      >
        <van-swipe-item v-for="(item, index) in musicList" :key="index">
          <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
            <div class="albumDetail">
              <img :src="item.image" alt="album" />
              <div class="name">{{ item.name }}</div>
            </div>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { getRecommendData } from "@/request/api/home";

// 专辑的名字和href  album.href,id:album.id
// 专辑的图片 album.images[1].url
// 专辑的名字 album。name
const musicList = ref([]);
onMounted(async () => {
  // isMounted = true; // 设置 isMounted 为 true
  console.log("Component mounted");
  await getRecommendData().then((response) => {
    console.log(response);
    const info = response.tracks;
    info.map((track) => {
      const album = {
        href: track.album.href,
        id: track.album.id,
        name: track.album.name,
        image: track.album.images[0].url,
        popularity: track.popularity,
        artists: track.artists,
      };
      musicList.value.push(album);
    });
    console.log(musicList.value);
  });
});
</script>
<style lang="less">
// .musicList {
//   width: 100%;
//   height: 5rem;
//   padding: 0.2rem;
//   .musicTop {
//     width: 100%;
//     height: 0.6rem;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 0.2rem;
//     .title {
//       font-size: 0.4rem;
//       font-weight: 900;
//     }
//     .more {
//       border: 1px solid #ccc;
//       text-align: center;
//       line-height: 0.6rem;
//       padding: 0 0.2rem;
//       border-radius: 0.4rem;
//     }
//   }
//   .musicContent {
//     width: 100%;
//     height: 3.6rem;
//     display: flex;
//     justify-content: space-between;
//     .van-swipe-item {
//       // margin-right: 0.14rem;
//       padding-right: 0.2rem;
//       position: relative;

//       .albumDetail {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: flex-start;
//         height: 100%;
//         .imageWrapper {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           img {
//             width: 100%;

//             border-radius: 0.2rem;
//             //   position: absolute;
//           }
//           .name {
//             //   position: absolute;
//             bottom: 0px;
//             width: 50%;
//             text-align: center;
//           }
//         }
//       }
//     }
//   }
// }
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 3.6rem;

    .van-swipe-item {
      //   margin-right: 0.14rem;
      padding-right: 0.2rem;
      position: relative;
      height: 3.8rem;
      img {
        width: 100%;
        height: 3.4rem;
        // height: 50%;
        border-radius: 0.2rem;
        //   position: absolute;
      }

      .icon {
        width: 0.3rem;
        height: 0.3rem;
      }

      .name {
        //   position: absolute;
        bottom: 0px;
      }
    }
  }
}
</style>
