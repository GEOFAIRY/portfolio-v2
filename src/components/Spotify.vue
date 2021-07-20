<template>
    <div class="spotify-playing" v-if="!isLoading">
        <a id="spotify-album-art" :href="spotifyData.album.link">
            <img :src="spotifyData.album.image" />
        </a>
        <div>
            <p class="spotify-text">I'm listening to:</p>
            <a
                id="spotify-track-name"
                class="spotify-text"
                :href="spotifyData.track.link"
                >{{ spotifyData.track.name }}</a
            >
            <a
                id="spotify-artist-name"
                class="spotify-text"
                :href="spotifyData.artist.link"
                >{{ spotifyData.artist.name }}</a
            >
            <a
                id="spotify-album-name"
                class="spotify-text"
                :href="spotifyData.album.link"
                >{{ spotifyData.album.name }}</a
            >
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

import axios from 'axios'

export default defineComponent({
    name: 'Spotify',
    data() {
        return {
            spotifyData: {},
            isLoading: true,
        }
    },
    beforeMount() {
        axios
            .get('https://spotify.kyranstagg.co.nz/api/current-playing?')
            .then((res) => {
                this.spotifyData = res.data.body
                this.isLoading = false
            })
            .catch((err) => console.error(err))
    },
})
</script>

<style lang="scss">
@import '../stylesheets/Spotify.scss';
</style>
