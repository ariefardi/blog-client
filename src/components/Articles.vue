<template>
<div>
      <v-container
        xs7
      >
        <v-layout row wrap>
          
          <v-flex xs7>
            <v-card color="white" class="">
                <v-layout row>
                  <v-flex xs5>
                    <v-card-media
                      src="https://s3.amazonaws.com/vuetify-docs/images/cards/halcyon.png"
                      height="200px"
                      contain
                    ></v-card-media>
                  </v-flex>
                  <v-flex xs7>
                    <div>
                      <span> <p> HACKTIV8 - 06 Jul 2018 </p></span>
                      <div class="headline algn"><h3>3 Websites to Help You Focus While Programming </h3></div>
                      <div> <p> Ada banyak situs web dan aplikasi musik yang dibuat secara khusus untuk
                         membantumu menjadi lebih produktif, santai, bahkan mengurangi rasa cemasmu.
                          Kita semua berbeda. Beberapa dari... </p>
                           <p><v-btn flat small left>laptop</v-btn></p>
                      </div>
                    </div>
                  </v-flex>
                </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      
</div>
</template>

<style lang="scss" scoped>
 h3 {
  text-align: left;
  text-decoration-color: #333 !important;
  font-weight: 700
}
p {
  text-align: left;
  text-decoration-color: #333 !important;
}
</style>
