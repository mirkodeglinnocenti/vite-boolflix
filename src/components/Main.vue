<template>

    <main>
        <div class="container">
            <ul>
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
</style>