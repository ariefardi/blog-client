<template>
<v-container xs12 fluid>
     <v-flex xs12 class="mrgnside" >
            <v-card>
              <p align="left" style="font-weight: 700; margin-left:10px; margin-top:10px;">Popular Tags</p>
              <hr>
                 <v-btn small color="grey">news</v-btn> 
                 <v-btn small color="grey">career</v-btn>
                 <v-btn small color="grey">tips</v-btn>
                 <br>
                 <v-btn small color="grey">javascript</v-btn>
                 
                 <v-btn small color="grey">react</v-btn>
                 
                 <v-btn small color="grey">vue</v-btn>
            </v-card>
     </v-flex>
</v-container>
     

</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
p {
    font-family: "Ubuntu", sans-serif;
    text-align: left
}
.mrgnside {
    margin-left: 70px
}
</style>
