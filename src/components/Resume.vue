<template>
    <div class="row">
        <a class="col" href="mailto:krs19@live.com">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                alt="Email icon"
                class="email svg"
            >
                <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
            </svg>
            <p>Contact</p>
        </a>
        <a
            class="col"
            href="https://kyranstagg.co.nz/Kyran-Stagg-Resume.pdf"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                alt="Download icon"
                class="download svg"
            >
                <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"
                />
            </svg>
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
