<template>
    <v-flex xs10>
        <v-card color="white" flat>
            <v-layout row wrap>
                <v-flex>
                    <span> 
                    <p style="margin-top:5px"> <img style="margin-right:10px" src="http://pluspng.com/img-png/beats-electronics-logo-vector-png-beats-electronics-logo-png-828.png" 
                    alt="" height="20px" width="20px"> 
                        <v-btn small flat icon> {{pageArticle.author}} -</v-btn> {{pageArticle.date}}
                    </p>
                    </span>
                    <section>
                        <p v-html="pageArticle.realContent" >  </p>
                    </section>
                </v-flex>
            </v-layout>
        </v-card>
    </v-flex>
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
      axios({
        method: 'get',
        url: 'http://localhost:3000/articles/showone/'+this.$route.params.id,
      })
      .then(({data})=> {
        this.pageArticle = data.article[0]
      })
    }
  },
  created () {
    this.getOneArticle()
  }
}
</script>

<style lang="scss" scoped>
p {
    line-height: 1cm;
    text-align: left;
    margin-left: 2cm;
    margin-right: 1.5cm
}
</style>
