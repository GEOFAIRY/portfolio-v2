<template>
    <div class="row">
        <a class="col" href="mailto:krs19@live.com">
            <img
                src="../assets/envelope-solid.svg"
                alt="Email icon"
                class="email svg"
            />
            <p>Contact</p>
        </a>
        <a class="col" href="https://kyranstagg.co.nz/Kyran-Stagg-Resume-epl.pdf">
            <img
                src="../assets/download-solid.svg"
                alt="Download icon"
                class="download svg"
            />
            <p>Resumé</p>
        </a>
        <a class="col" href="https://github.com/GEOFAIRY">
            <img
                src="../assets/github-mark-white.png"
                alt="Github icon"
                class="github"
            />
            <p>GitHub</p>
        </a>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "Resume",
});
</script>
<style lang="scss">
.row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;

    .col {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        margin: 0 30px;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

        &:hover {
            animation: shake 0.3s linear;
            cursor: pointer;
        }

        .download,
        .email,
        .github {
            width: 40px;

            &.svg {
                filter: invert(85%) sepia(94%) saturate(22%) hue-rotate(288deg)
                    brightness(112%) contrast(105%);
            }
        }
    }
}

@keyframes shake {
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(-15deg);
    }

    50% {
        transform: rotate(0deg);
    }

    75% {
        transform: rotate(15deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
</style>
