<template>
    <v-jumbotron style="margin-top:-14px">
        <div container >
            <img src="https://blog.hacktiv8.com/content/images/2018/05/photo-1517430816045-df4b7de11d1d.jpeg" alt="" width="100%">
        </div>
        <div class="text-block" >
            <v-container xs12>
                <v-flex xs8>
                <h2 style="text-align:left">5 Points to Improve your Programming Logic</h2>
                <p> <v-btn small color="light-blue" style="margin-left:-330px; margin-top: -0px"  > news </v-btn> </p>
                </v-flex>
            </v-container>
        </div>
    </v-jumbotron>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
    .container {
        position: relative;
    }
    .text-block {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: white;
        padding-left: 20px;
        padding-right: 20px;
        opacity: 50%;
    }
    h2,p {
        font-family: "Ubuntu",sans-serif;
        font-weight: 700
    }
    img {
        -webkit-filter: brightness(70%);
        filter: brightness(70%)
    }
</style>
