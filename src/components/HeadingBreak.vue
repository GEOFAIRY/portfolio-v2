<template>
  <div class="wavy">
    <div class="top-wave">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        :style="{ width: 'calc(100% + '+curveWidth+'px)' }"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        />
      </svg>
    </div>
    <div class="middle-wave">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        :style="{ width: 'calc(125% + '+curveWidth+'px)' }"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        />
      </svg>
    </div>
    <div class="last-wave">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        :style="{ width: 'calc(150% + '+curveWidth+'px)' }"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

interface State {
  curveWidth: number
  currentPos: number
}

export default defineComponent({
  data: (): State => {
    return {
      curveWidth: 0,
      currentPos: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollingWave)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollingWave)
  },
  methods: {
    scrollingWave(event: Event) {
      // Any code to be executed when the window is scrolled
      this.curveWidth = (1000 - window.pageYOffset) * 5
      if (this.curveWidth < 0) this.curveWidth = 0;
    },
    scrollDirection(event: Event) {

    }
  },
})
</script>

<style lang="scss" scoped>
.wavy {
  position: relative;
  padding-bottom: 240px;
  .top-wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 10;

    svg {
      position: relative;
      display: block;
      height: 300px;
    }

    .shape-fill {
      fill: #7fac71;
    }
  }
  .middle-wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 5;

    svg {
      position: relative;
      display: block;
      width: calc(123% + 1.3px);
      height: 250px;
    }

    .shape-fill {
      fill: #628856;
    }
  }

  .last-wave {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
      position: relative;
      display: block;
      width: calc(150% + 1.3px);
      height: 200px;
    }

    .shape-fill {
      fill: #46693b;
    }
  }
}
</style>
