<template>
<div class="home">
    <Navbar></Navbar>
    <Detail></Detail>
    <v-container xs12 grid-list-md text-xs-center>
        <v-layout row wrap justify-center>
            <DetailArticle ></DetailArticle>
        </v-layout>
    </v-container>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Detail from '@/components/Detail.vue'
import DetailArticle from '@/components/DetailArticle'
import SideLayout from '@/components/SideLayout.vue'
import PopularTag from '@/components/PopularTag.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Detail,
    DetailArticle,
    SideLayout,
    PopularTag
  }
}
</script>
<style lang="scss" scoped>
</style>
