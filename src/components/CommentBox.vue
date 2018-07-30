<template>
    <v-form ref="form" @submit.prevent="submit">
        <v-container grid-list-xl fluid>
          <v-layout wrap>
            <v-flex xs12>
                <v-card flat class="pointer-cursor" >
                    <h3>Click Below Open Comment Box</h3>
              <v-textarea
                color="teal"
                v-model="comment"
              >
                <div slot="label">
                  Comment (23)
                </div>
              </v-textarea>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data () {
        const defaultForm = Object.freeze({
            bio: '',
        })
        return {
            form: Object.assign({}, defaultForm),
            defaultForm
        }
    },
    computed: {
        comment: {
            get () {
                return this.$store.state.comment
            },
            set (value) {
                this.$store.commit('setComment', value)
            }
        }
    }
}
</script>

<style scoped>
.pointer-cursor {
        cursor: pointer;
    }
</style>
