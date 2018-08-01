<template>
    <v-carousel  class="caro" >
        <v-carousel-item v-for="(item, index) in article1" :key="index" xs12 sm6 md6 lg3  >
            
                            <v-card-media :src="item.imgSrc" class="white--text" 
                                    height="350px">
                                <v-container class="hoverText">
                                    <v-layout>
                                    <v-flex xs12 align-end flexbox>
                                        <v-card flat hover>
                                        <h3 class="fontHead" :style=" {
                                            'font-size': 50+'px'
                                        } " > {{item.title}} </h3>
                                        <p>--</p>
                                        <p :style=" {
                                            'font-size': 20+'px'
                                        } "> {{item.category}} </p>
                                        </v-card>
                                    </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-media>
                        
        </v-carousel-item>
    </v-carousel>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
         ...mapState([
            'articles'
        ]),
        article1: {
            get () {
                return this.$store.state.articles
            }
        },
        article2: {
            get () {
                console.log(this.articles, 'ini articles')
                return this.$store.state.sideArticles
            }
        }
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    font-weight: bold
}
    .caro {
        height: 350px;
    }
    .imge {
        height: 250px;
        width: 250px;
        -webkit-filter: grayscale(80%) ;
        filter: grayscale(80%)
    }
    .fontHead {
        font-family: "Ubuntu", sans-serif;
        font-size: 23px;font-weight: 700;
        letter-spacing: 0.5px;
    }
    p {
        font-family: "Ubuntu", sans-serif;
        font-size: 13px;
        font-weight: 700;
        margin-top: -10px
    } 
</style>
