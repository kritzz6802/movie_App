<script setup>
import footer from './FooterView.vue';
</script>

<template>
<div class="container">
    <div class="header">
        <header class="nav-area" id="navbar">
        <div class=" menu-wrapper ">
            <h2 class="logo"> <a href="#"> Movie App </a> </h2>
            <nav class="navvv">
                <ul class=" right-nav ">
                    <li> <router-link to="/">Home</router-link> </li>
                    <li> <router-link to="/popular">Popular</router-link> </li>
                    <li> <router-link to="/top_rated">toprated</router-link> </li>
                    <li> <router-link to="/upcoming">upcoming</router-link> </li>

                </ul>
            </nav>
        </div>
    </header>


        <!-- <div class="h-l2">
            filter data
            <h1> Discover the movie which you wanted </h1>
        </div> -->
        <!-- <div>
            <span class="search-icon">
                <fa icon="fa-search" />
            </span><input type="text" v-model="input" placeholder="Search Movie..." class="search-bar" />
        </div> -->
    </div>


</div>
<footer/>
</template>

<style scoped>
.search-bar {
    display: block;
    width: 350px;
    margin: 20px auto;
    padding: 10px 45px;
    background: white url("assets/search-icon.svg") no-repeat 15px center;
    background-size: 15px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.search-icon {
    display: block;
    position: absolute;
    left: 9.7rem;
    z-index: 2;
    top: 33rem;
    margin: auto;
    color: black;
    padding: 0px 0px;
    background-size: 15px 15px;
    font-size: 16px;
}
</style>
