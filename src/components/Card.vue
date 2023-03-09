<template>

    <li class="card-result">
        <img :src="getImage()" alt="">
        <p>Titolo: {{ result.title !== undefined ? result.title : result.name }}</p>
        <p>Titolo originale: {{ result.original_title ? result.original_title : result.original_name }}</p>
        <div class="language-box">
            <p>Lingua:</p>
            <img v-if="!setFlag(result.original_language) == ''" class="flag-icon" :src="setFlag(result.original_language)" alt="flag">
            <p v-else>{{ result.original_language }}</p>
        </div>
        <div class="row vote">
            <p>Voto:</p>
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
            let poster_path = base_url + file_size + file_path;
            console.log(poster_path)

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
            const numStars = Math.ceil(vote / 2);
            return numStars
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

.starList{
    display: flex;
}

.vote{
    gap: 5px;
}

.star-solid{
    color: rgb(177, 160, 5);
}


</style>