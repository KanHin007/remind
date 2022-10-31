<template>
  <main-index style="height: 100vh"/>
  <main-footer style="position: absolute;bottom: 0px"/>
</template>

<script>
import MainIndex from './components/MainIndex'
import MainFooter from "@/components/MainFooter";

export default {
  name: 'App',
  components: {
    MainIndex,
    MainFooter
  }
}
</script>

<style>

</style>
