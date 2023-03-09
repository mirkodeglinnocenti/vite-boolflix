<template>

    <header>
        <div class="container">
            <div class="row">

                <div class="col">
                    <img class="logo" src="/img/logo_boolflix.png" alt="logo di Boolflix">
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