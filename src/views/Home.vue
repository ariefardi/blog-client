<template>
<div class="home">
    <Navbar class="mrgntop"></Navbar>
    <Carousel/>
    <Articles/>
    <Articles/>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Articles from '@/components/Articles.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Articles,
    Carousel
  }
}
</script>
<style lang="scss" scoped>
  .mrgntop {
    margin-top: 70px
  }
</style>
