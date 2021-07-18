<template>
    <Portfolio />
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Portfolio from './components/Portfolio.vue'

export default defineComponent({
    name: 'App',
    components: {
        Portfolio,
    },
})
</script>

<style>
@import './stylesheets/App.scss';
</style>
