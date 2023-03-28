import { createWebHistory, createRouter } from 'vue-router';
import homePage from './components/homePage.vue';
import popularMovie from './components/popularMovie.vue';
import upcomingMovie from './components/upcomingMovie.vue';
import topRated from './components/topRatedMovie.vue';
import getMovieDetail from './components/getMovieDetail.vue';

const routes = [{
        name: 'homePage',
        path: '/',
        component: homePage
    },
    {
        name: 'PopularMovie',
        path: '/popular',
        component: popularMovie
    },
    {
        name: 'TopRated',
        path: '/top_rated',
        component: topRated
    },
    {
        name: 'UpComing',
        path: '/upcoming',
        component: upcomingMovie
    },
    {
        name: 'getMovieDetail',
        path: '/movie/:id',
        component: getMovieDetail
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;