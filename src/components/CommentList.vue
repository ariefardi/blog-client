<template>
    <v-card>
        <v-container
          fluid
          grid-list-lg
          style="padding:0"
          v-for="(comment, index) in pageArticle.comments" :key="index"
        >
          <v-layout row wrap>
  
            <v-flex xs12>
              <v-card color="cyan darken-2" class="white--text" flat style="padding:0">
                <v-layout>
                  <v-flex xs1>
                    <v-card-media
                      src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                  <v-flex xs11>
                    <v-card-title style="padding:0" primary-title>
                      <strong> {{comment.user.username}} - {{comment.date}} </strong>
                    </v-card-title>
                    <v-card-text style="padding:0;text-align:left">
                      {{comment.content}}
                    </v-card-text>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        
      </v-card>
</template>

<script>
import axios from 'axios'
import {mapState, mapActions} from 'vuex'
export default {
  computed: {
        ...mapState([
            'pageArticle'
        ])
    },
  methods: {
      ...mapActions([
          'getOneArticle'
      ]),
    triggerIdArticle () {
        let id = this.$route.params.id
        console.log(id, ' ini id kebaca gak ya')
        this.getOneArticle(id)

    }
  },
  created () {
      this.triggerIdArticle()
  }
}
</script>
