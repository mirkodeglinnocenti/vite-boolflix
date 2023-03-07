<template>

    <li class="card-result">
        <img :src="getImage()" alt="">
        <p>Titolo: {{ result.title }}</p>
        <p>Titolo originale: {{ result.original_title }}</p>
        <p>Lingua originale: {{ result.original_language }}</p>
        <p>Voto: {{ result.vote_average }}</p>
    </li>


</template>

<script>
export default{
    props:{
        result: {
            type: Array,
            required: true
        }
    },
    methods:{
        getImage(){
        const base_url = 'https://image.tmdb.org/t/p/';
        const file_size = 'w500';
        const file_path = this.result.poster_path;
        const poster_path = base_url + file_size + file_path;
        return poster_path;
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