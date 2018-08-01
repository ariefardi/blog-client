import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles : [],
    sideArticles : [],
    comment: '',
    pageArticle: '',
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
    },
    setComment (state, payload) {
      state.comment = payload
    },
    setPageArticle (state, payload) {
      state.pageArticle = payload
    },
    setPageArticleComments (state, payload) {
      state.pageArticle.comments.push(payload)
      state.comment = ''
    },
    deleteArticle (state, payload) {
      state.articles.splice(payload,1)
    }
  },
  actions: {
    getArticles (context) {
      console.log('axios get articles')
      axios.get('https://api-blog.ariefardi.xyz/articles')
      .then(({data})=> {
        let result = data.dataArticles
        console.log(data)
        context.commit('setArticles',result)
        // console.log(this.state.articles)
      })
    },
    getSideArticles (context) {
      console.log('axios from getSideArticles')
      axios.get('https://api-blog.ariefardi.xyz/articles')
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
    },
    postComment({commit},id) {
      console.log('post answer', this.state.comment)
      console.log(id)
      let userId = localStorage.getItem('_id')
      console.log(userId, 'user ID')
      axios.post('https://api-blog.ariefardi.xyz/articles/'+id+'/comment',{
        content: this.state.comment,
        article: id,
        user: userId
      })
      .then(({data})=> {
        console.log(data.comment)
        let result = data.comment
        commit('setPageArticleComments', result)
        swal('Succesfully adding your comment')
      })
      .catch(err=> {
        console.log(err.message)
      })
    },
    getOneArticle ({commit}, id) {
      console.log(id,'ini id-----')
      axios({
        method: 'get',
        url: 'https://api-blog.ariefardi.xyz/articles/showone/'+id,
      })
      .then(({data})=> {
        let pageArticle = data.article[0]
        commit('setPageArticle', pageArticle)
      })
    },
    deleteArticle ({commit}, index) {
      console.log('delete article', this.state.articles[index]._id)
      let token = localStorage.getItem('token')
      let id = this.state.articles[index]._id
      if (token) {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this article!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            axios.delete('https://api-blog.ariefardi.xyz/articles/delete/'+id)
            .then(()=> {
              commit('deleteArticle', index)
            })
            .catch(err=> {
              swal ('Some unexpected sh*t happen')
            })
            swal("Poof! Your file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your article is safe!");
          }
        });
      }
      else {
        swal('Your session already ended')
      }
      
      
    }
  }
})
