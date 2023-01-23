<template>
  <!-- Heading -->
  <Heading />
  <HeadingBreak />
  <Me />
  <Work />
  <!-- UC -->
  <!-- Projects -->
</template>

<script lang="ts">
import Heading from './Heading.vue'
import HeadingBreak from './HeadingBreak.vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name: 'Portfolio',
    components: {
        Heading,
        HeadingBreak
    },
})
</script>

<style></style>
