<template>

    <li class="card-result">
        <img :src="getImage()" alt="">
        <p>Titolo: {{ result.title }}</p>
        <p>Titolo originale: {{ result.original_title }}</p>
        <div class="language-box">
            <p>Lingua:</p>
            <img v-if="!setFlag(result.original_language) == ''" class="flag-icon" :src="setFlag(result.original_language)" alt="flag">
            <p v-else>{{ result.original_language }}</p>
        </div>
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
        }
    }

}
</script>

<style lang="scss" scoped>

.card-result{
    // background-color: green;
    padding: 10px;
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




</style>