<template>
<div class="home">
    <Navbar class="mrgntop"></Navbar>
    <Carousel/>
    <v-container xs12 grid-list-md text-xs-center>
      <v-layout row wrap>
        <Articles/> 
        <v-flex> 
        <SideLayout/>
        <PopularTag/>
        </v-flex>
      </v-layout>
    </v-container>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Articles from '@/components/Articles.vue'
import Carousel from '@/components/Carousel.vue'
import SideLayout from '@/components/SideLayout.vue'
import PopularTag from '@/components/PopularTag.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Articles,
    Carousel,
    SideLayout,
    PopularTag
  }
}
</script>
<style lang="scss" scoped>
  .mrgntop {
    margin-top: 70px
  }
</style>
