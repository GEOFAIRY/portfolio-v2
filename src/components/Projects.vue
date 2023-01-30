<template>
    <div class="max-height">
        <a href="https://sunsetdrive.kyranstagg.co.nz/" target="_blank">
            <div class="card">
                <img
                    src="../assets/sunsetdrive.png"
                    alt="Sunset drive preview"
                    class="sunset-img"
                />
                <a
                    class="card-expand"
                    href="https://github.com/GEOFAIRY/sunset-drive"
                    target="_blank"
                >
                    <img
                        src="../assets/github-mark-white.png"
                        alt="Github Link"
                    />
                    <h4>View on GitHub</h4>
                </a>
            </div>
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "Portfolio",
});
</script>
<style lang="scss">
.max-height {
    height: 90vh;
    display: flex;
    justify-content: center;
    margin-top: 20vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.card {
    background-color: #181818;
    padding: 40px 50px;
    text-align: center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    transition: height 0.5s;
    transition: 0.3s;
    overflow: hidden;
    height: 70vh;

    @media only screen and (max-width: 600px) {
        height: 55vh;
    }

    .card-expand {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        flex-direction: column;

        h4 {
            text-decoration: none;
            color: white;
            font-weight: normal;
            margin: 0;
            cursor: pointer;

            &:link {
                text-decoration: none;
            }
            &:visited {
                text-decoration: none;
            }
            &:hover {
                text-decoration: none;
            }
            &:active {
                text-decoration: none;
            }
        }

        img {
            margin-top: 20px;
            margin-bottom: 5px;
            height: 30px;
            cursor: pointer;
        }
    }

    .sunset-img {
        width: 35vw;
        height: 65vh;

        @media only screen and (max-width: 1920px) {
            width: 60vw;
        }

        @media only screen and (max-width: 800px) {
            width: 80vw;
        }

        @media only screen and (max-width: 600px) {
            width: 80vw;
            height: 50vh;
        }
    }

    &:hover {
        height: 73vh;
        animation: imgexpand 0.3s;
        transform: translate(-5px, -5px);
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);

        @media only screen and (max-width: 600px)  {
            height: 60vh;
        }

        .card-expand {
            animation: fadeIn 0.3s;
            background-color: #181818;
            opacity: 1;
        }

        .sunset-img {
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        }
    }

    &:not(:hover) {
        animation: imgcollapse 0.3s;
        transform: translate(0px, 0px);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes imgexpand {
    0% {
        transform: translate(0px, 0px);
    }

    100% {
        transform: translate(-5px, -5px);
    }
}

@keyframes imgcollapse {
    0% {
        transform: translate(-5px, -5px);
    }

    100% {
        transform: translate(0px, 0px);
    }
}
</style>
