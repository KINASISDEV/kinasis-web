import './Banner.css'

export default {
  name: 'Banner',
  data() {
    return { ytPlayer: null }
  },
  methods: {
    scrollToContent() {
      const main = document.querySelector('.main-content')
      if (main) main.scrollIntoView({ behavior: 'smooth' })
    },
    initYouTubePlayer(videoId = 'sH4uierF0Lc', startSec = 180, endSec = 353) {
      try {
        this.ytPlayer = new window.YT.Player('banner-yt-player', {
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            rel: 0,
            modestbranding: 1,
            start: startSec,
            end: endSec
          },
          events: {
            onReady: (e) => {
              try {
                e.target.seekTo(startSec, true)
                e.target.playVideo()
              } catch (ex) {}
            },
            onStateChange: (e) => {
              if (e.data === window.YT.PlayerState.ENDED) {
                try { e.target.seekTo(startSec); e.target.playVideo() } catch (ex) {}
              }
            }
          }
        })
      } catch (err) {
        console.warn('YT player init failed', err)
      }
    }
  },
  mounted() {
    const startSec = 180
    const endSec = 353
    if (!window.YT || !window.YT.Player) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
      window.onYouTubeIframeAPIReady = () => {
        this.initYouTubePlayer(undefined, startSec, endSec)
      }
    } else {
      this.initYouTubePlayer(undefined, startSec, endSec)
    }
  }
}
