<template>
  <!-- Heading -->
  <Heading />
  <HeadingBreak />
  <Work />
  <!-- UC -->
  <!-- Projects -->
</template>

<script lang="ts">
import Heading from './Heading.vue'
import HeadingBreak from './HeadingBreak.vue'
import Work from './Work.vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name: 'Portfolio',
    components: {
        Heading,
        HeadingBreak,
        Work,
    },
})
</script>

<style></style>
