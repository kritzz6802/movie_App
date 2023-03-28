<template>
<div class="container">
    <div class="slider-div">
        <!-- <h1 class="head-line1"> Discover the movie which you wanted </h1> -->
        <swiper :slidesPerView="1" :spaceBetween="30" :pagination="{
                   clickable: true,
                   }" :autoplay="autoplay" class="mySwiper slider">

            <swiper-slide v-for="movie in movies_data" :key="movie">
                <div class="movie-content">

                    <h1><b>{{movie.original_title}}</b></h1>
                    <h4 class="star"> {{movie.release_date}} &nbsp; &nbsp; &nbsp; {{movie.vote_average}}
                        <fa icon="fa-star" />
                    </h4>
                    <p> {{movie.overview}}</p>

                </div>
                <img class="slider-img" :src=" `https://image.tmdb.org/t/p/original${movie.backdrop_path}` " alt="">

            </swiper-slide>
        </swiper>

    </div>
    <br>

    <div class="input-group">
        <input type="search" v-model.trim="search" placeholder="Search movies_data..." @keyup="findByName" class="form-control" aria-label="Search" aria-describedby="search-addon" />
    </div>
    <br>
    <div class="body_part">
        <h1>{{type}} Movies</h1> <br>
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
import footerView from './FooterView.vue';

// Import Swiper styles
import "swiper/css";

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
            type: "Popular",
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
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
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
