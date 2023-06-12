<template>
  <div>
    <TopNav />
    <Swiper />
    <IconList />
    <MusicList />
  </div>
</template>
<script setup>
import TopNav from "@/components/home/TopNav.vue";
import Swiper from "@/components/home/Swiper.vue";
import IconList from "@/components/home/IconList.vue";
import MusicList from "@/components/home/MusicList.vue";
import axios from "axios";


// const url = "https://accounts.spotify.com/api/token";
// const data =
//   "grant_type=client_credentials&client_id=2420c111fd12499583b601fa4624a3d7&client_secret=70ccacae314e4c8b810aecdb35ec95be";
// const config = {
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
// };
// const getToken = async () => {
//   const res = await axios
//     .post(url, data, config)
//     .then((response) => {
//       // console.log(response.data);
//       let access_token = response.data.access_token
//       let token_type = response.data.token_type
//       let token = token_type + " " + access_token
//       // console.log(token);
//       return token
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
// const token = getToken();
// console.log(token);
// const getData = async () => {
//   const res = await axios.get('https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb', {
//   headers: {
//     'Authorization': token
//   }
// })
//   .then(response => {
//     // 请求成功的处理逻辑
//     console.log(response.data);
//   })
//   .catch(error => {
//     // 请求失败的处理逻辑
//     console.error(error);
//   });

// };
// getData();
</script>

<style lang="less"></style>
