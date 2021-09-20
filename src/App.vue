<template>
  <Portfolio />
  <Spotify />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Portfolio from './components/Portfolio.vue'
import Spotify from './components/Spotify.vue'

export default defineComponent({
    name: 'App',
    components: {
        Portfolio,
        Spotify
    },
})
</script>

<style>
@import './stylesheets/App.scss';
</style>
