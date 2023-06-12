<template>
  <ItemMusicTop :albumData="albumData" />
  <ItemMusicList :albumData="albumData"/>
</template>
<script setup>
import { useRouter } from "vue-router";
import { getAlbumData } from "@/request/api/item";
const router = useRouter();
import { ref, onMounted, watch, computed } from "vue";
import ItemMusicTop from "@/components/item/ItemMusicTop.vue";
import ItemMusicList from "@/components/item/ItemMusicList.vue";
const id = router.currentRoute.value.query.id;
const albumData = ref([]);

// 图片，名字，作者，歌曲列表
onMounted(async () => {
  await getAlbumData(id).then((response) => {
    // console.log(response);
    const album = {
      artists: response.artists,
      id: response.id,
      label: response.label,
      images: response.images[1].url,
      name: response.name,
      tracks: response.tracks,
      release_date: response.release_date
    };
    albumData.value.push(album);
    console.log(albumData.value);
    sessionStorage.setItem("itemDetail", JSON.stringify(albumData.value));
  });
});
</script>
<style lang="less"></style>
