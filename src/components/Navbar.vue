<template>
    <div>
    <v-toolbar
      absolute
      color="grey"
      dark
    > 
      <v-toolbar-title class="warna" style="margin-top=20px"> 
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Blogger.svg/2000px-Blogger.svg.png" 
      alt="" height="50px" width="50px">
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

      <v-btn to="login" flat v-if="loginStatus==false" color="white"> Login
      </v-btn>
      <v-btn to="register" flat v-if="loginStatus==false" color="white"> Register
      </v-btn>
    </v-toolbar-items>
    </v-toolbar>
    </div>
</template>
<script>
import swal from 'sweetalert'
export default{
  methods: {
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
</style>