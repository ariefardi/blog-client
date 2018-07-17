<template>
    <v-jumbotron>
        <div container >
            <img :src="pageArticle.imgSrc" alt="" width="100%">
        </div>
        <div class="text-block" >
            <v-container xs12>
                <v-flex xs8>
                <h2 style="text-align:left"> {{pageArticle.title}} </h2>
                <p> <v-btn small color="light-blue" style="margin-top: -0px"  > {{pageArticle.category}} </v-btn> </p>
                </v-flex>
            </v-container>
        </div>
    </v-jumbotron>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
          pageArticle : ''
        }
    },
    methods: {
        getOneArticle () {
        let id = this.$route.params.id
        console.log(id,'ini id')
        axios({
            method: 'get',
            url: 'http://localhost:3000/articles/showone/'+this.$route.params.id,
        })
        .then(({data})=> {
            this.pageArticle = data.article[0]
            console.log(this.pageArticle)
         })
        }
    },
    created () {
        this.getOneArticle()
    }
}
</script>

<style lang="scss" scoped>
    .container {
        position: relative;
    }
    .text-block {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: white;
        padding-left: 20px;
        padding-right: 20px;
        opacity: 50%;
    }
    h2,p {
        font-family: "Ubuntu",sans-serif;
        font-weight: 700
    }
    img {
        -webkit-filter: brightness(70%);
        filter: brightness(70%)
    }
</style>
