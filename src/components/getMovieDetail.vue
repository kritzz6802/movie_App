<script setup>
import {
    useRoute
} from 'vue-router';
import {
    ref
} from 'vue';
import {
    onMounted
} from 'vue';
const movie_details = ref([]);

// getting all data in page through fetch api
onMounted(() => {
    const route = useRoute();
    async function getData() {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
        const finalRes = await res.json();
        // add api data in empty array
        movie_details.value = finalRes;
        console.log(movie_details.value)
    }
    getData()
});
</script>
<template>
<div class="container">
    <br>
    <h1 style="text-align: center;"> Movie Details </h1>
    <div class="img-div">
        <img class="movie-img" :src="`https://image.tmdb.org/t/p/original${movie_details.backdrop_path}`" alt="">
    </div>

    <div class="movieDetail">
        <div class="movieDetail1">

            <h1> {{ movie_details.id }} </h1>
            <h1><b> {{ movie_details.title }}</b></h1>
            <h4> {{ movie_details.tagline }}</h4>
            <h6> {{ movie_details.overview }}</h6>
            <h2> {{ movie_details.vote_average }} <fa icon="fa-star" /></h2>
        </div>
        <div class="poster-card">
            <img class="poster-img img-div" :src="`https://image.tmdb.org/t/p/original${movie_details.poster_path}`" alt="">
            <div class="movie-info">
                <h6><b>{{movie_details.original_title}}</b></h6>
                <p class="date"> <span>{{movie_details.release_date}}</span><span>{{movie_details.vote_average}}
                        <fa icon="fa-star" /></span></p>
                <!-- <p> {{movie.overview.slice(0,10)}}</p> -->
            </div>
        </div>

    </div>
</div>
</template>
