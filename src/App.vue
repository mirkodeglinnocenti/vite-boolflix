<template>
  <Header @onInput="fetchResults"/>
  <Main />
</template>




<script>
import Header from './components/Header.vue';

import Main from './components/Main.vue';

// Axios per le api
import axios from 'axios';
// store
import store from './store';

export default{
  components:{
    Header,
    Main,
  },
  data (){
        return{
          store,
        }
    },
    methods:{
      fetchResults() {
        this.fetchMovies()
        this.fetchSeries()

      },
      fetchMovies(){
        axios
        .get('https://api.themoviedb.org/3/search/movie',{
            params:{
                api_key: '8767f185cb61d1dc9df638268490e6ef',
                language: 'it-IT',
                query: this.store.inputSearch
            }
        })
        .then((res) => {
            this.store.results = res.data.results;
        })
        .catch(() =>{
          this.store.results = []
        })
      },
      fetchSeries(){
        axios
        .get('https://api.themoviedb.org/3/search/tv',{
            params:{
                api_key: '8767f185cb61d1dc9df638268490e6ef',
                language: 'it-IT',
                query: this.store.inputSearch
            }
        })
        .then((res) => {
            this.store.tvSeries = res.data.results;
        })
        .catch(() => {
          this.store.tvSeries = []
        })
      }
    }
}
</script>

<style lang="scss">
@use './style/general.scss' as *;

</style>
