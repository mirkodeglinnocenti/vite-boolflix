<template>

    <li class="card-result">
        <p>Titolo: {{ result.title }}</p>
        <p>Titolo originale: {{ result.original_title }}</p>
        <p>Lingua originale: {{ result.original_language }}</p>
        <p>Lingua originale: {{ result.vote_average }}</p>
    </li>


</template>

<script>
export default{
    props:{
        result: {
            type: Array,
            required: true
        }
    }

}
</script>

<style lang="scss" scoped>

.card-result{
    background-color: green;
    padding: 10px;
}



</style>