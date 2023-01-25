<template>
  <Heading />
  <HeadingBreak />
  <Projects />
  <Resume />
</template>

<script lang="ts">
import Heading from './Heading.vue'
import HeadingBreak from './HeadingBreak.vue'
import Projects from './Projects.vue'
import Resume from './Resume.vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name: 'Portfolio',
    components: {
        Heading,
        HeadingBreak,
        Projects,
        Resume
    },
})
</script>

<style></style>
