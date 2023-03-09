<template>

    <header>
        <div class="container">
            <div class="row">

                <div class="col">
                    <a href="#">
                        <img @click="resetResult" class="logo" src="/img/logo_boolflix.png" alt="logo di Boolflix">
                    </a>
                </div>

                <div class="col">
                    <input @keyup.enter="$emit('onInput')" v-model="store.inputSearch" type="text" placeholder="Inserisci nome">
                </div>

            </div>
        </div>
    </header>

</template>

<script>
import store from '../store';

export default{
    data (){
        return{
          store,
        }
    },
    methods:{
        resetResult(){
            this.store.movies = [];
            this.store.tvSeries = [];
        }
    }
}

</script>

<style lang="scss" scoped>

@use '../style/partials/variables.scss' as *;

header{
    
    padding: 15px 0;
    background-color: black;

    .logo{
        width: 120px;
        display: block;
    }

    .row{
    align-items: center;
    justify-content: space-between;

        input{
            padding: 5px;
        }

    }

}

</style>