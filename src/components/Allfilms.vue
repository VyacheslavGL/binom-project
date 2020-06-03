<template>
    <v-container >
        <v-layout >
            <v-card style=" margin: 50px auto" elevation="4">
                <v-card-title>
                    Лучшие фильмы
                    <v-spacer></v-spacer>
                    <v-text-field
                            v-model="searchTerm"
                            append-icon="mdi-magnify"
                            label="Введите название"
                            single-line
                            hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                        :headers="headers"
                        :items="filterFilms"
                        :search="search"
                        @click:row="clicked"
                ></v-data-table>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Allfilms",
        data(){
            return{
                search: '',
                title:['The Gentlemen', 'Once Upon a Time... in Hollywood', 'Knives Out', 'Spider-Man: Far from Home', 'Ford v Ferrari', 'The Lion King', 'Avengers: Endgame', '1917', 'The Irishman', 'The Lighthouse', 'Alita: Battle Angel', 'Captain Marvel', 'Glass', 'John Wick: Chapter 3 - Parabellum'],
                allfilms:[],
                searchTerm: null,
                headers: [
                    {
                        text: 'Название',
                        align: 'start',
                        sortable: false,
                        value: 'Title',
                    },
                    { text: 'Жанр', value: 'Genre' },
                ],
            }
        },
        computed: {
            filterFilms() {
                // Отвечает за поиск
                let films = this.allfilms;
                if (this.searchTerm) {
                    films = films.filter(b =>
                        b.Title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0);
                }

                return films;
            },
        },
        methods:{
            clicked(value) {
                this.$router.push({name: 'Detailsfilm', params: {title: value.Title}});
                // this.$router.push({name: 'Detailsfilm'});

            },
        },
        async created() {
            for(let i=0; i<this.title.length; i++){
               const respons = await this.$http.get(`http://www.omdbapi.com/?t=${encodeURIComponent(this.title[i])}&apikey=783ccc76`);
                if(respons.data && respons.status === 200){
                    this.allfilms.push(respons.data);
                }else{
                    throw new Error('Сервер не доступен')
                }
            }
        }
    }
</script>

<style scoped>

</style>