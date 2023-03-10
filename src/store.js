import {reactive} from 'vue';

const store = reactive ({
    movies:[],
    tvSeries:[],
    inputSearch: '',
    actors:[]

})

export default store;