import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles : [],
    sideArticles : []
  },
  mutations: {
    setArticles(state, payload){
      state.articles = payload.reverse()
    },
    filterAuthor(state, payload) {
      state.articles = payload
    },
    filterCategory(state, payload) {
      state.articles = payload
    },
    setSideArticles(state, payload) {
      state.sideArticles = payload
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
    getSideArticles (context) {
      console.log('axios from getSideArticles')
      axios.get('http://localhost:3000/articles')
      .then(({data})=> {
        let temp = data.dataArticles
        let result = []
        for(var i=0;i<4;i++){
          result.push(temp[i])
        }
        console.log(result)
        context.commit('setSideArticles',result)
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
    filterByCategory (context, category) {
      console.log('get filter by category')
      console.log(category)

      let temp = []
      for(var i=0;i<this.state.articles.length;i++){
        if (this.state.articles[i].category==category) {
          temp.push(this.state.articles[i])
        }
      }
      console.log('ini tmep', temp)
      context.commit('filterCategory',temp)
    },
    backHome(context) {
      console.log('ini bakchome')
      this.getArticles()
    }
  }
})
