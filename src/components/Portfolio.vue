<template>
  <Heading />
  <HeadingBreak />
  <Projects />
</template>

<script lang="ts">
import Heading from './Heading.vue'
import HeadingBreak from './HeadingBreak.vue'
import Projects from './Projects.vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name: 'Portfolio',
    components: {
        Heading,
        HeadingBreak,
        Projects
    },
})
</script>

<style></style>
