<template>
    <header>
        <div class="container">
            <div class="row">

                <div class="col">
                    <h1>BoolFlix</h1>
                </div>

                <div class="col">
                    <input @keyup.enter="$emit('onInput')" v-model="store.inputSearch" type="text" placeholder="Inserisci nome">
                </div>

            </div>
    
        </div>
    </header>
</template>

<script>
export default{

}

</script>

<style lang="scss" scoped>

header{
    padding: 15px 0;
    background-color: black;
}
.row{
    align-items: center;
    justify-content: space-between;

    h1{
        font-size: 26px;
        color: rgb(209, 9, 9);
        font-weight: 600;
    }

    input{
        padding: 5px;
    }

}


</style>