<template>
    <v-flex xs12 sm7 md7 lg7 >
      <v-card flat color="white" class="" v-for=" (article, index) in articles " :key="index">
          <v-layout row>
            <v-flex xs5>
              <v-card-media
                :src="article.imgSrc"
                height="200px"
                contain
              ></v-card-media>
            </v-flex>
            <v-flex xs7>
              <div>
                <span> 
                  <p style="margin-top:5px"> <img style="margin-right:10px" src="http://pluspng.com/img-png/beats-electronics-logo-vector-png-beats-electronics-logo-png-828.png" 
                alt="" height="20px" width="20px"> 
                    <v-btn small flat icon @click="filterByAuthor(article.author)"> {{article.author}} -</v-btn>{{article.date}} 
                  </p>
                </span>
                <div style="margin-top:-20px" class="headline algn"> <h3> <router-link to="/detail" class="router"> {{article.title}}</router-link> </h3></div>
                <div paragraph> <p> {{article.content}} </p>
                      <p><v-btn @click="filterByCategory(article.category)" class="mrgnbtn" flat small left> {{article.category}} </v-btn></p>
                </div>
              </div>
            </v-flex>
            
          </v-layout>
      </v-card>
    </v-flex>
</template>
<script>
import {mapState,mapActions} from 'vuex'
  export default {
    computed: {
      ...mapState([
        'articles'
      ])
    },
    methods: {
      ...mapActions([
        'filterByAuthor','filterByCategory'
      ])
    },
    created () {
      this.$store.dispatch('getArticles')
    }
  }
</script>
<style lang="scss" scoped>
 h3 {
  text-align: left;
  text-decoration-color: #333 !important;
  font-weight: 700;
}
p {
  text-align: left;
  text-decoration-color: #333 !important;
  margin-right: 20px
}
.mrgnbtn {
  margin-left: -35px
}
.router:hover {
  color: grey,
}
.router {
  color: black,
}

</style>
