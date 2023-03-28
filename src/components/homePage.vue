<template>
<div class="container">
    <div class="slider-div">
        <div>
            <div class="tital">
                <h1 class="h-l1">
                    Welcome
                </h1>
                <h3 class="h1-l2">Millions of movies, TV shows and people to discover. Explore now.</h3>
                <div class="input-group">
                    <input type="search" v-model.trim="search" placeholder="Search movies_data..." @keyup="findByName" class="form-control" aria-label="Search" aria-describedby="search-addon" />
                </div>
            </div>
            <img class="bg-img1" src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/tlEFuIlaxRPXIYVHXbOSAMCfWqk.jpg" alt="">
            <!-- <img class="bg-img1" src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/5GISMqlRXMEyBrgEqyvhaMMuQmJ.jpg" alt=""> -->
        </div>
        <div>
            <div class="tital2">
                <h1 class="img2-l1">THAT'S A
                    WRAP 2022</h1>
                <hr>
                <h4 class="img2-l2">The best (and worst) from 2022.</h4>
            </div>
            <img class="bg-img1" src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/rGbRnRvkmrSub07ty89Vnlsh6UX.jpg" alt="">
        </div>
    </div>
    <br>

    <div class="body_part">
        <h1>Top Rated Movies</h1> <br>
        <div class="b-p2-3">
            <!-- {{ movies_data }} -->
            <div class="poster-card" v-for="movie of movies_data" :key="movie">
                <a class="poster-card" :href="`/movie/${movie.id}`">
                    <div class="img-div">
                        <img class="poster-img img-div" :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="">
                    </div>
                    <div class="movie-info">
                        <h6><b>{{movie.original_title}}</b></h6>
                        <p class="date"> <span>{{movie.release_date}}</span><span>{{movie.vote_average}}
                                <fa icon="fa-star" /></span></p>
                        <!-- <p> {{movie.overview.slice(0,10)}}</p> -->
                    </div>
                </a>
            </div>

        </div>
    </div>
</div>

<footerView />

</template>

<script>
import {
    Swiper,
    SwiperSlide
} from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import footerView from './FooterView.vue';

import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import '../assets/main.css';
import SwiperCore, {
    EffectCube,
    Pagination,
    Autoplay
} from "swiper"

SwiperCore.use([EffectCube, Pagination, Autoplay])
// import required modules
import {
    Keyboard,
    Scrollbar,
    Navigation,

} from "swiper";

export default {
    name: "StarWarsmovies_dataComponent",

    components: {
        Swiper,
        SwiperSlide,
        footerView
    },
    setup() {
        return {
            modules: [Keyboard, Scrollbar, Navigation, Pagination],
        };
    },

    data() {
        return {
            movies_data: [],
            search: "",
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
        };
    },

    mounted() {
        console.log("Component mounted.");
    },

    methods: {
        findByName() {
            fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
                .then(response => response.json())
                .then(res => {
                    if (this.search) {
                        this.movies_data = res.results.filter(movies_data =>
                            movies_data.original_title.toLowerCase().includes(this.search.toLowerCase())
                        );
                        console.log(res)
                    } else {
                        this.movies_data = res.results;
                    }
                });
        }
    },
    created() {
        this.findByName();
    }
};
</script>

<style scoped>
.input-group {
    position: absolute !important;
    width: 25% !important;
    margin-top: 240px;

}

.btn {
    border-radius: 56px !important;
    margin-left: -74px !important;
}
</style>
