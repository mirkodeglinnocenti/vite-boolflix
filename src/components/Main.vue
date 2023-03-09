<template>

    <main class="main">
        <div class="container">
            <ul v-if="moviesAndTvSeries.length > 0" class="list-results">
                <Card v-for="result in moviesAndTvSeries" :key="result.id" :result="result"/>
            </ul>
            <p class="message-no-results" v-else>Nessun Risultato</p>
        </div>
    </main>
    
    

</template>

<script>
// Componente card
import Card from './Card.vue';
// store
import store from '../store';


export default{
    components:{
        Card,
    },
    data (){
        return{
            store,
        }
    },
    computed:{
        movies(){
            return this.store.movies
        },
        tvSeries(){
            return this.store.tvSeries
        },
        moviesAndTvSeries(){
            return this.store.movies.concat(this.store.tvSeries)
        }   
    }
}
</script>

<style lang="scss" scoped>

.main{
    padding: 30px;

    .message-no-results{
        font-size: 1.6rem;
    }
    .list-results{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
}


</style>