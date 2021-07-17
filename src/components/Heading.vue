<template>
    <div class="heading">
        <div class="pokemon">
            <h1>Site under construction...</h1>
            <div class="background"></div>
            <!-- <div id="May"></div> -->
            <div id="Brendan" :class="brendanClass"></div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name: 'Heading',
    data() {
        return {
            brendanClass: '',
            brendanFrame: 0,
        }
    },
    mounted() {
        setInterval(() => {
            this.brendanFrame = (this.brendanFrame + 1) % 4
            var frameArr = ['', 'frame2', '', 'frame3']
            this.brendanClass = frameArr[this.brendanFrame]
        }, 150)
    },
})
</script>

<style lang="scss">
@import '../stylesheets/Heading.scss';
@import '../stylesheets/Brendan.scss';
</style>
