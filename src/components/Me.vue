<template>
  <div class="me">
    <div class="blurb">
      <h2>Professional Software Engineer, Amateur Bassist, Terrible Athlete</h2>
      <div class="software-engi hidden">
        <img
          src="../assets/software-engineer.jpg"
          alt="hah"
        >
        <p>
          I have been a fulltime software engineer for 5 years. After completing
          my degree in Computer Science, I worked two contracts until I became a
          fulltime employee at Arlo Software.
        </p>
      </div>
      <div class="bass hidden">
        <img
          src="../assets/bass.jpg"
          alt="hah"
        >
        <p>
          In my spare time I practice my Bass playing. Playing has been a dream
          since my high school days, and now it's my favourite way to relax.
        </p>
      </div>
      <div class="recreation hidden">
        <img
          src="../assets/skating.jpg"
          alt="hah"
        >
        <p>
          Although I'm not the most physical person, I recently started climbing
          and I enjoy skating around Wellington. See you out there!
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.me {
  height: 70vh;
  .blurb {
    font-family: 'Raleway', sans-serif;

    .hidden {
      display: none;
    }

    h2 {
      text-align: center;
    }
  }
}
</style>
