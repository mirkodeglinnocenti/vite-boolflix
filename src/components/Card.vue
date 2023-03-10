<template>

    <li class="card-result">
        <img :src="getImage()" alt="">
        <p class="card-category">{{ result.title !== undefined ? film : serieTv  }}</p>
        <div @mouseenter="fetchActors" class="card-description">
            <p><span class="card-description_title">Titolo:</span> {{ result.title !== undefined ? result.title : result.name }}</p>
            <p><span class="card-description_title">Titolo originale:</span> {{ result.original_title ? result.original_title : result.original_name }}</p>
            <div class="language-box">
                <span class="card-description_title">Lingua:</span>
                <img v-if="!setFlag(result.original_language) == ''" class="flag-icon" :src="setFlag(result.original_language)" alt="flag">
                <p v-else>{{ result.original_language }}</p>
            </div>
            <div class="row vote">
                <span class="card-description_title">Voto:</span>
                <div>
                    <ul class="starList">
                        <li v-for="n in setStars(result.vote_average)">
                            <font-awesome-icon class="star-solid" icon="fa-solid fa-star"/>
                        </li>
                        <li v-for="n in (5 - setStars(result.vote_average))">
                            <font-awesome-icon icon="fa-regular fa-star" />
                        </li>
                    </ul> 
                </div>
            </div>
            <!-- una soluzione -->
            <!-- <div v-for="(actor,index) in actors.slice(0, 5)" :key="index">{{ actor.name }}</div> -->
            <!-- seconda soluzione -->
            <div class="row">
                <span class="card-description_title">Attori:</span>
                <ul class="cast-list">
                    <li v-for="(name, index) in getActors()" :key="index">{{ name }},</li>
                </ul>
            </div>
            
            <p><span class="card-description_title">Trama:</span> {{ result.overview }}</p>
        </div>
        
        
    </li>


</template>

<script>

// Axios per le api
import axios from 'axios';
// store
import store from '../store';


export default{
    props:{
        result: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            film: 'Film',
            serieTv: 'Serie TV',
            store
        }
    },
    computed:{
        resultId(){
            return this.result.id
        },
        actors(){
            return this.store.actors
        }  
    },
    methods:{
        getImage(){
            const base_url = 'https://image.tmdb.org/t/p/';
            const file_size = 'w500';
            const file_path = this.result.poster_path;
            let poster_path = base_url + file_size + file_path;

            if (poster_path === 'https://image.tmdb.org/t/p/w500null'){
                poster_path = '/img/copertina_boolflix.png';
            }
            return poster_path;
        },
        setFlag (language){
            switch (language){
                case 'en':
                    return '/flag-icon/us.png';
                    break;
                case 'it':
                    return '/flag-icon/it.png';
                    break;
                case 'fr':
                    return '/flag-icon/fr.png';
                    break;
                default:
                    return '';
                    
            }
        },
        setStars(vote){
            const numStars = Math.round(vote / 2);
            return numStars
        },
        fetchActors(){
            let base = 'https://api.themoviedb.org/3/'
            let film = 'movie/'
            let tv = 'tv/'
            let id = this.resultId
            let endPoint = '/credits'
            let test = ''

            if (this.result.title !== undefined){
                test = base + film + id + endPoint
            } else {
                test = base + tv + id + endPoint
            }

            console.log(test);
            axios
            .get(test,{
                params:{
                    api_key: '8767f185cb61d1dc9df638268490e6ef',
                    language: 'it-IT'
                }
            })
            .then((res) => {
                this.store.actors = res.data.cast
                console.log(this.store.actors)
            })
            
        },
        getActors(){

            let attori = []

            for(let i = 0; i < 5; i++){
                let attore = this.actors[i].name;
                attori.push(attore)
            }

            return attori
        }
    }

}
</script>



<style lang="scss" scoped>

.card-result{
    position: relative;

    img{
        display: block;
    }
    .card-description_title{
        font-weight: 600;
        color: lightcoral;
    }
    .language-box{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px;
        .flag-icon{
        width: 20px;
        }
    }

    .starList{
        display: flex;
    }

    .vote{
        gap: 5px;
    }

    .star-solid{
        color: rgb(177, 160, 5);
    }


    .card-description{
        display: none;
    }

    .card-category{
        position: absolute;
        left: 0px;
        bottom: 10px;
        padding: 5px;
        background-color: red;

    }

}

.cast-list{
    display: contents;
}
.card-result:hover{
    overflow: hidden;
    
    .card-description{
        overflow-y: scroll;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 30px;
        background-color: rgb(0, 0, 0, 0.9);
    }

}

// Barra di scorrimento delle card trasparente
::-webkit-scrollbar {
    display: none;
}

</style>