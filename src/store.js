import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles : []
  },
  mutations: {
    setArticles(state, payload){
      state.articles = payload.reverse()
    },
    filterAuthor(state, payload) {
      state.articles = payload
    }
  },
  actions: {
    getArticles (context) {
      console.log('axios get articles')
      axios.get('http://localhost:3000/articles')
      .then(({data})=> {
        let result = data.dataArticles
        // console.log(result)
        context.commit('setArticles',result)
        // console.log(this.state.articles)
      })
    },
    filterByAuthor (context, author) {
      console.log('get filter by author')
      console.log(author)
      // console.log(this.state.articles)
      let temp = []
      for(var i=0;i<this.state.articles.length;i++){
        if (this.state.articles[i].author==author) {
          temp.push(this.state.articles[i])
        }
      }
      console.log('ini temp', temp)
      context.commit('filterAuthor', temp)
    },
    backHome(context) {
      console.log('ini bakchome')
      this.getArticles()
    }
  }
})
