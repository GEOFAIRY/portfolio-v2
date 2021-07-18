<template>
<!-- Heading -->
<Heading/>
<Work/>
<!-- UC -->
<!-- Projects -->
</template>

<script lang="ts">
import Heading from './Heading.vue'
import Work from './Work.vue'
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'Portfolio',
    components: {
        Heading,
        Work
    }
})
</script>

<style></style>
