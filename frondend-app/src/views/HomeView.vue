<template>
  <div class="home">    
    <TopNav />
    <Swipe />
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/home/TopNav.vue";
import Swipe from "@/components/home/Swipe.vue";
export default {
  name: "HomeView",
  components: {TopNav,Swipe},
};
</script>

<style type="text/css">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
