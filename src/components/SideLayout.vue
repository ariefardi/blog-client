<template>
<div>
     <v-flex xs12 sm12 md12 class="mrgnside">
            <v-card flat>
              <p align="left" style="font-weight: 700; margin-left:10px; margin-top:5px;">TOP STORIES</p>
              <hr>
              <div v-for="(sideArticle, index) in sideArticles" :key="index" >  
                    <p> <v-btn fab dark small color="grey">
                        <b> {{index+1}} </b>
                        </v-btn>
                        <b> 
                        <router-link :to="`/detail/${sideArticle._id}`"> {{sideArticle.title}} </router-link>
                        </b>
                        <br>
                    </p>
                    <p style="margin-top:-30px; margin-left:60px; margin-right:-60px"> {{sideArticle.date}} </p>
              </div>
              <br>
            </v-card>
     </v-flex>
</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import PopularTag from '@/components/PopularTag.vue'
export default {
    components: {
        PopularTag
    },
    data () {
        return {
        }
    },
    computed: {
        ...mapState([
            'articles','sideArticles'
        ])
    },
    methods: {
        ...mapActions([
        ]),
        testState () {
            // console.log('articles', this.articles)
            // this.sideArticle = this.articles
            // console.log(this.sideArticle)
        }
    },
    created () {
        this.$store.dispatch('getSideArticles')
    }
}
</script>

<style lang="scss" scoped>
p {
    font-family: "Ubuntu", sans-serif;
    text-align: left
}
.mrgnside {
    margin-left: 0px,

}
a {
    color: black
}
a:hover {
    color: grey;
    text-decoration: none
}
</style>
