<template>
<v-flex>
    <v-card >
      <CommentBox></CommentBox>
      <v-card-actions >
          <v-btn @click="postCommentTrigger"  >post as anonymous</v-btn>
      </v-card-actions>
    </v-card>
    <v-container>
        <v-layout>
            <v-flex>
                <CommentList></CommentList>
            </v-flex>
        </v-layout>
    </v-container>
</v-flex>
</template>

<script>
import CommentBox from '@/components/CommentBox.vue'
import CommentList from '@/components/CommentList.vue'
import {mapActions, mapState} from 'vuex'
export default {
    components: {
        CommentBox,
        CommentList
    },
    computed: {
        ...mapState([
            'pageArticle', 'comments'
        ])
    },
     methods: {
        ...mapActions([
            'postComment'
        ]),
        postCommentTrigger () {
            if (localStorage.hasOwnProperty('token')) {
                let query = this.$route.params.id
                this.postComment(query)
            }
            else {
                swal('You must login first!')
            }
        }
    },
}
</script>

<style scoped>

</style>
