<template>
  <div
    v-if="!isLoading"
    class="spotify-playing"
  >
    <a
      id="spotify-album-art"
      :href="spotifyData.album.link"
      target="_blank"
    >
      <img :src="spotifyData.album.image">
    </a>
    <div>
      <p class="spotify-text">
        I'm listening to:
      </p>
      <a
        id="spotify-track-name"
        class="spotify-text"
        :href="spotifyData.track.link"
        target="_blank"
      >{{ spotifyData.track.name }}</a>
      <a
        id="spotify-artist-name"
        class="spotify-text"
        :href="spotifyData.artist.link"
        target="_blank"
      >{{ spotifyData.artist.name }}</a>
      <a
        id="spotify-album-name"
        class="spotify-text"
        :href="spotifyData.album.link"
        target="_blank"
      >{{ spotifyData.album.name }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

import axios from 'axios'

interface State {
    spotifyData: SpotifyData
    isLoading: boolean
}

interface SpotifyData {
    album: SpotifyAlbumData
    artist: SpotifyArtistData
    track: SpotifyTrackData
}

interface SpotifyAlbumData {
    name: string
    link: string
    image: string
}

interface SpotifyArtistData {
    name: string
    link: string
}

interface SpotifyTrackData {
    name: string
    link: string
}

export default defineComponent({
    name: 'Spotify',
    data: (): State => {
        return {
            spotifyData: {
                artist: {
                    name: '',
                    link: '',
                },
                album: {
                    name: '',
                    link: '',
                    image: '',
                },
                track: {
                    name: '',
                    link: '',
                },
            },
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
