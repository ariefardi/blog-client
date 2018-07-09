<template>
     <v-flex xs12 class="mrgnside">
            <v-card>
              <p align="left" style="font-weight: 700; margin-left:10px; margin-top:5px;">TOP STORIES</p>
              <hr>
              <div v-for="(sideArticle, index) in sideArticles" :key="index" >  
                    <p> <v-btn fab dark small color="grey">
                        <b> {{index+1}} </b>
                        </v-btn>
                        <b> 
                        {{sideArticle.title}}
                        </b>
                        <br>
                    </p>
                    <p style="margin-top:-30px; margin-left:60px; margin-right:-60px"> {{sideArticle.date}} </p>
              </div>
              <br>
            </v-card>
     </v-flex>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
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
</style>
