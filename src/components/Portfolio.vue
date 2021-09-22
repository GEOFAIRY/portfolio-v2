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
import Me from './Me.vue'
import Work from './Work.vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name: 'Portfolio',
    components: {
        Heading,
        HeadingBreak,
        Me,
        Work,
    },
})
</script>

<style></style>
