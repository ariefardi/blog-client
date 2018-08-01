<template>
<!-- <div class="topnav" id="myTopnav">
  <router-link to="/">
    <img src="http://pluspng.com/img-png/beats-electronics-logo-vector-png-beats-electronics-logo-png-828.png" 
      alt="" height="23px" width="24px"> Log
  </router-link>

  <v-btn :style="{padding:0, 'margin-left':-80+'%', 'margin-top': 9+'px'}" @click="logout" v-if="loginStatus" color="white" flat >  <strong>Logout</strong ></v-btn>
  <v-btn flat v-if="loginStatus" to="/upload" :style=" {padding:0, 'margin-top': 9+'px' } " color="white" > <v-icon>cloud_upload</v-icon> <strong>Upload</strong>  </v-btn>
  <router-link to="login" v-if="loginStatus==false" >
    Login
  </router-link>
  <router-link to="register" v-if="loginStatus==false" >
    Register
  </router-link>
  <a href="javascript:void(0);" class="icon" @click="openNav">
    <i class="fa fa-bars"></i>
  </a>
</div> -->
<v-toolbar dark color="black">
    <v-btn to="/" flat icon=""><v-icon flat >home</v-icon></v-btn>
    <v-toolbar-title  class="white--text">Blog</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn :style="{padding:0, 'margin-left':-80+'%', 'margin-top': 9+'px'}" @click="logout" v-if="loginStatus" color="white" flat >  <strong>Logout</strong ></v-btn>
    <v-btn @click="toUpload" flat v-if="loginStatus && userlogin=='loki'" :style=" {padding:0, 'margin-top': 9+'px' } " color="white" > <v-icon>cloud_upload</v-icon> <strong>Upload</strong>  </v-btn>

    <v-btn flat to="/login" v-if="loginStatus==false"> <strong>Login</strong> </v-btn>
    <v-btn flat to="/register" v-if="loginStatus==false" > <strong>Register</strong> </v-btn>
  </v-toolbar>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import swal from 'sweetalert'

export default{
  methods: {
    toUpload () {
      this.$router.push('/upload')
    },
    ...mapActions([
      'getArticles',
    ]),
    openNav () {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    },
    logout () {
      console.log('clear consolelog')
      swal({
        title: "Are you sure to logout?",
        text: "Once logout, you need to login again!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((logout) => {
        if (logout) {
          swal('You already logout', {
            icon: "success",
          });
          localStorage.clear()
          this.loginStatus=false
          this.$router.push('/')
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
      loginStatus: false,
      userlogin : ''
    }
  },
  created () {
    if (localStorage.hasOwnProperty('token')) {
      this.loginStatus = true
      this.userlogin = localStorage.getItem('username')
    }
    else{
      this.loginStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
// .topnav {
//   overflow: hidden;
//   background-color: #333;
// }

// .topnav a {
//   float: left;
//   display: block;
//   color: #f2f2f2;
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
//   font-size: 17px;
// }
// .topnav-right {
//   float: right;
// }
// .topnav a:hover {
//   background-color: #ddd;
//   color: black;
// }

// .active {
//   background-color: #4CAF50;
//   color: white;
// }

// .topnav .icon {
//   display: none;
// }

// @media screen and (max-width: 600px) {
//   .topnav a:not(:first-child) {display: none;}
//   .topnav a.icon {
//     float: right;
//     display: block;
//   }
// }

// @media screen and (max-width: 600px) {
//   .topnav.responsive {position: relative;}
//   .topnav.responsive .icon {
//     position: absolute;
//     right: 0;
//     top: 0;
//   }
//   .topnav.responsive a {
//     float: none;
//     display: block;
//     text-align: left;
//   }
// }
</style>