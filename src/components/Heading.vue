<template>
  <div class="heading">
    <div class="pokemon">
      <div class="text-box">
        <p>Kyran Stagg</p>
        <p>Software Engineer</p>
      </div>
      <div class="background" />
      <div
        id="May"
        :class="walkClass"
      />
      <div
        id="Brendan"
        :class="walkClass"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

interface State {
  walkClass: string
  walkFrame: number
}

export default defineComponent({
  name: 'Heading',
  data: (): State => {
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

@font-face {
    font-family: arcade;
    src: url('../assets/ARCADECLASSIC.TTF');
}

.text-box {
    position: absolute;
    background: white;
    top: 50px;
    left: 50px;
    z-index: 100;
    border: 2px solid #008cff;
    border-radius: 6px;
    padding: 5px 30px;
    font-size: 24px;
    letter-spacing: 5px;
    font-family: arcade;

    @media screen and (max-width: 700px)  {
      top: 200px;
    }
}
</style>
