<template>

    <main class="main">
        <div class="container">
            <ul class="list-results">
                <Card v-for="result in results" :key="result.id" :result="result"/>
            </ul>
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
        results(){
            return this.store.results
        }
    }
}
</script>

<style lang="scss" scoped>

.main{
    padding: 30px;
}
.list-results{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

</style>