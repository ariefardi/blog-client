<template>
   <div id="mySidenav" class="sidenav">
    <a href="#" id="instagram"><v-icon>fa fa-instagram</v-icon></a>
    <a href="#" id="twitter"> <v-icon>fa fa-twitter</v-icon> </a>
    <a href="#" id="facebook"><v-icon>fa fa-facebook </v-icon></a>
    <a href="#" id="steam"><v-icon>fa fa-steam </v-icon></a>
   </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#mySidenav a {
    position: absolute;
    left: -80px;
    transition: 0.3s;
    padding: 15px;
    width: 100px;
    text-decoration: none;
    font-size: 20px;
    color: white;
    border-radius: 0 5px 5px 0;
    margin-top: 450px
}

#mySidenav a:hover {
    left: 0;
}

#instagram {
    top: 20px;
    background-color: #C13584;
}

#twitter {
    top: 80px;
    background-color: #2196F3;
}

#facebook {
    top: 140px;
    background-color: #f44336;
}

#steam {
    top: 200px;
    background-color: #555
}
</style>
