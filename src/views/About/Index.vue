<template>
  <div
    id="about"
    class="grid-container">
    <div class="grid-item brief">
      <h1>{{ $t('about.newEra') }}</h1>
      <h3>{{ $t('about.brief1') }}</h3>
      <h3>{{ $t('about.brief2') }}</h3>
      <!-- <h4>Everything happen in Frontend Development</h4> -->
      <!-- <h3 style="text-align: center;">I believe that being a senior rontend developer, not only have to focus on how deep frontend world is, but alse need to have relevant field domain. Knowing what backend＆Design thinking and why.</h3>
      <h1 style="text-align: right;">By Kevin Hu</h1> -->
      <!-- <div>A senior frontend developer should always clearly issue and .</div> -->
    </div>
    <div 
      id="personality-radar"
      class="grid-item personality-radar">
    </div>
    <div
      id="skill-radar"
      class="grid-item skill-radar">
   </div>
    <div class="grid-item quote-container">
      <h3>{{ $t('about.quote') }}: </h3>
      <div>{{ $t('about.quoteDesc') }}</div>
      <div class="quote-author">Kevin Hu</div>
    </div>
    <div class="grid-item duty-container">
      <h3>{{ $t('about.duty') }}: </h3>
      <ul>
        <li>RWD</li>
        <li>SPA</li>
        <li>SSR</li>
        <li>Cross browser support</li>
        <li>Multiple-language RTL website</li>
      </ul>
    </div>
    <div class="grid-item special-container">
      <h3>{{ $t('about.special') }}: </h3>
      <ul>
        <li>JSDC Taiwan 2017 {{ $t('about.speaker') }}: <a target="_blank" href="http://2017.jsdc.tw/speaker.html">Link</a></li>
        <li>Aframe weekly post: <a target="_blank" href="https://aframe.io/blog/istaging/">Link</a></li>
        <li>{{ $t('about.tutorPiecework') }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import {
  throttle
} from '@/utils'
import {
  PERSONALITY_RADAR_SETTING,
  SKILL_RADAR_SETTING
} from '@/views/About/data'

export default {
  name: 'About',

  components: {
  },

  data () {
    return {
      personalityRadarChart: {},
      skillRadarChart: {},
      personalityRadarSetting: PERSONALITY_RADAR_SETTING,
      skillRadarSetting: SKILL_RADAR_SETTING
    }
  },

  mounted () {
    const personalityRadar = document.getElementById('personality-radar')
    this.personalityRadarChart = echarts.init(personalityRadar)
    this.personalityRadarChart.setOption(this.personalityRadarSetting, true)

    const skillRadar = document.getElementById('skill-radar')
    this.skillRadarChart = echarts.init(skillRadar)
    this.skillRadarChart.setOption(this.skillRadarSetting, true)

    window.addEventListener('resize', throttle(this.onWindowResize, 250), false)
  },

  methods: {
    onWindowResize () {
      this.personalityRadarChart.resize()
      this.skillRadarChart.resize()
    }
  },

  beforeDestroy () {
    document.removeEventListener('resize', throttle(this.onWindowResize, 250))
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'

#about {
  &.grid-container {
    display: grid
    grid-template-areas:
      "brief"\
      "personality-radar"\
      "skill-radar"\
      "quote-container"\
      "duty-container"\
      "special-container"
    grid-column-gap: 15px
    grid-row-gap: 15px
    grid-auto-columns: minmax(auto, 100%)

    @media screen and (min-width: $mobile-break-point) {
      grid-template-columns: repeat(6, 1fr)
      grid-template-rows: 1fr 2fr 2fr
      grid-template-areas:
        "brief brief brief brief brief brief"\
        "personality-radar personality-radar personality-radar skill-radar skill-radar skill-radar"\
        "quote-container quote-container duty-container duty-container special-container special-container"
    }
  }

  .grid-item {
    padding: 20px
    // display: flex
    color: $white

    a {
      color: $blue
      text-decoration none

      &:hover {
        text-decoration underline
      }
    }
    // font-size: 2em
    // justify-content: center
    // align-items: center
    // height: 100%;
  }

  .brief {
    grid-area: brief
  }

  .personality-radar {
    background-color: #748CC5
    grid-area: personality-radar
    min-height: 300px
  }

  .skill-radar {
    background-color: #C57474
    grid-area: skill-radar
    min-height: 300px
  }

  .quote-container {
    background-color: #8174c5
    grid-area: quote-container

    .quote-author {
      margin-top: 20px
      text-align right
    }
  }

  .duty-container {
    background-color: #ccaf1c
    grid-area: duty-container
  }

  .special-container {
    background-color: #8BC574
    grid-area: special-container
  }
}

</style>
