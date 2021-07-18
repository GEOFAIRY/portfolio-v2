<template>
    <div class="heading">
        <div class="pokemon">
            <h1>Site under construction...</h1>
            <div class="background"></div>
            <div id="May" :class="walkClass"></div>
            <div id="Brendan" :class="walkClass"></div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name: 'Heading',
    data() {
        return {
            walkClass: '',
            walkFrame: 0,
        }
    },
    mounted() {
        setInterval(() => {
            this.walkFrame = (this.walkFrame + 1) % 4
            var frameArr = ['', 'frame2', '', 'frame3']
            this.walkClass = frameArr[this.walkFrame]
        }, 150)
    },
})
</script>

<style lang="scss">
@import '../stylesheets/Heading.scss';
@import '../stylesheets/Brendan.scss';
@import '../stylesheets/May.scss';
</style>
