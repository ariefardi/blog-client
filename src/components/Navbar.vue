<template>
    <div>
    <v-toolbar
      color="grey"
      dark
      fixed
    > 
      <v-toolbar-title class="warna" style="margin-top=20px">
        <v-btn to="/" color="grey" icon @click="getArticles"> 
      <img src="http://pluspng.com/img-png/beats-electronics-logo-vector-png-beats-electronics-logo-png-828.png" 
      alt="" height="50px" width="50px">
       </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down" >
      <v-btn flat v-if="loginStatus == true" to="/upload" color="white">
        <v-icon >cloud_upload</v-icon>
        upload
      </v-btn>
      <v-btn flat v-if="loginStatus == true" @click="logout" color="white">
        logout
      </v-btn>

      <v-btn to="login" flat v-if="loginStatus==false" color="black" > <b> Login </b>
      </v-btn>
      <v-btn to="register" flat v-if="loginStatus==false" color="black"> <b> Register </b>
      </v-btn>
      <v-btn icon  flat>
        <v-icon>fa fa-facebook</v-icon>
      </v-btn>
      <v-btn icon  flat>
        <v-icon>fa fa-instagram</v-icon>
      </v-btn>
      <v-btn icon  flat>
        <v-icon>fa fa-twitter</v-icon>
      </v-btn>
      <v-btn icon  flat>
        <v-icon>fa fa-steam</v-icon>
      </v-btn>
    </v-toolbar-items>
    </v-toolbar>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import swal from 'sweetalert'
export default{
  methods: {
    ...mapActions([
      'getArticles',
    ]),
    logout () {
      console.log('clear consolelog')
      swal({
        title: "Are you sure to logout?",
        text: "Once logout, you need to login again!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal('You already logout', {
            icon: "success",
          });
          localStorage.clear()
          window.location = '/'
        } 
        else {
          swal("You gak jadi logout");
        }
      });
    }
  },
  data () {
    return {
      dialog: false,
      loginStatus: false
    }
  },
  created () {
    if (localStorage.hasOwnProperty('token')) {
      this.loginStatus = true
    }
    else{
      this.loginStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .cont {
    background-color: white
  }
  .warna {
      text-decoration-color: black
  }
  .btnbtn {
    font-family: "Ubuntu", sans-serif
  }
</style>