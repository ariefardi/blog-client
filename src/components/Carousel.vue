<template>
    <v-carousel class="caro">
        <v-carousel-item>
            <v-container justify-space-between>
                <v-layout row wrap>
                    <v-flex v-for="(item, index) in items" :key="index" xs3>
                        <!-- <v-card dark color="secondary"> -->
                        <v-card-media :src="item.src" class="white--text imge" height="250px">
                            <v-container fill-height class="hoverText">
                                <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <v-card flat hover>
                                    <h3 class="fontHead"> {{item.header}} </h3>
                                    <p>--</p>
                                    <p> {{item.tag}} </p>
                                    </v-card>
                                </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-media>
                        <!-- </v-card> -->
                    </v-flex>
                </v-layout>
            </v-container>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {
                    src: 'https://hacktiv8.com/img/covers/fullstack_upper--md5--fa8a1b64027501b72b2847592fa7e864.jpg',
                    header: 'How to be a Happy Bootcamper',
                    tag: 'tips, proggramming'
                },
                {
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2T0bTDjIeadLOFgQ55PC76XEBOUzKoKNd8Qbk2bfPcOXmrTdV',
                    header: 'Why We Need More Women In Tech',
                    tag: 'women in tech, proggramming' 
                },
                {
                    src: 'https://static.cdn-cdpl.com/700x350/b8e29e8f0b15aab3473fed5df06c9186/hacktiv8-kelas.png',
                    header: 'IT Degree Vs. Coding Bootcamp',
                    tag: 'tips, proggramming'
                },
                {
                    src: 'https://d26bwjyd9l0e3m.cloudfront.net/wp-content/uploads/2016/06/Hacktiv8-Kursus-JavaScript-1-Ilustrasi.jpg',
                    header: '3 Jobs You can Land After a Coding Bootcamp',
                    tag: 'tips, career'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    font-weight: bold
}
    .caro {
        height: 350px;
    }
    .imge {
        height: 250px;
        width: 250px;
        -webkit-filter: grayscale(80%) ;
        filter: grayscale(80%)
    }
    .fontHead {
        font-family: "Ubuntu", sans-serif;
        font-size: 23px;font-weight: 700;
        letter-spacing: 0.5px;
    }
    p {
        font-family: "Ubuntu", sans-serif;
        font-size: 13px;
        font-weight: 700;
        margin-top: -10px
    } 
</style>
