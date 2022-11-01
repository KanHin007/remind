<template>
<!--  <main-index style="height: 100vh"/>-->
  <main-footer style="position: fixed;bottom: 0;width: 100%;margin: auto;box-sizing: border-box;"/>
  <router-view></router-view>
</template>

<script>
// import MainIndex from '@/components/MainIndex'
import MainFooter from "@/components/MainFooter";

export default {
  name: 'MainPage',
  components: {
    // MainIndex,
    MainFooter
  }
}
</script>

<style>

</style>
