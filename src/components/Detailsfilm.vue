<template>
    <v-container>
        <v-layout column>
            <v-row   justify="center" class="mt-12" v-for="(item, index) in film" :key="index" >
                <v-col
                        cols="6"
                        md="3"
                        >
                    <v-img :src="item.Poster" alt="Picture" ></v-img>

                </v-col>
                <v-divider vertical class="hidden-sm-and-down"/>
                <v-col
                        cols="6"
                        md="4"
                       >
                    <h1>{{item.Title}}</h1>
                    <h4>Год: {{item.Year}}</h4>
                    <h3>Страна: {{item.Country}}</h3>
                    <h4>Режисер: {{item.Director}}</h4>
                    <h4>Жанр: {{item.Genre}}</h4>
                    <h4>В главных ролях: {{item.Actors}}</h4>
                    <h4>Язык: {{item.Language}}</h4>
                    <h4>Сюжет: </h4><p> {{item.Plot}}</p>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Detailsfilm",
        data(){
            return{
                film:[],
            }
        },
        async created() {
            const respons = await this.$http.get(`http://www.omdbapi.com/?t=${encodeURIComponent(this.$route.params.title)}&apikey=783ccc76`);
            if(respons.data && respons.status === 200){
                this.film.push(respons.data);
            }else{
                throw new Error('Сервер не доступен')
            }
        }
    }
</script>

<style scoped>

</style>