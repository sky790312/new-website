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
        <li>JSDC Taiwan 2017 {{ $t('about.speaker') }}: <a href="http://2017.jsdc.tw/speaker.html">Link</a></li>
        <li>Aframe weekly post: <a href="https://aframe.io/blog/istaging/">Link</a></li>
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

export default {
  name: 'About',

  components: {
  },

  data () {
    return {
      personalityRadarChart: {},
      skillRadarChart: {},
      personalityRadarOption: {
        tooltip: {
          trigger: 'axis'
        },
        radar: [{
          indicator: [
            {text: 'Responsiveness', max: 100},
            {text: 'Patience', max: 100},
            {text: 'Leading', max: 100},
            {text: 'Communication', max: 100}
          ],
          radius: 80
        }],
        series: [{
          type: 'radar',
          tooltip: {
            trigger: 'item'
          },
          itemStyle: {
            normal: {
              areaStyle: {
                type: 'default'
              }
            }
          },
          data: [{
            value: [90, 80, 75, 80],
            name: 'Personality: '
          }]
        }],
        textStyle: {
          color: '#fff'
        },
        lineStyle: {
          color: '#fff'
        },
        itemStyle: {
          color: '#fff'
        }
      },
      skillRadarOption: {
        tooltip: {
          trigger: 'axis'
        },
        radar: [{
          indicator: [
            {text: 'Frontend', max: 100},
            {text: 'Backend', max: 100},
            {text: 'Seo', max: 100},
            {text: 'Test', max: 100},
            {text: 'Git', max: 100}
          ],
          radius: 80
        }],
        series: [{
          type: 'radar',
          tooltip: {
            trigger: 'item'
          },
          itemStyle: {
            normal: {
              areaStyle: {
                type: 'default'
              }
            }
          },
          data: [{
            value: [90, 70, 80, 80, 80],
            name: 'Skills: '
          }]
        }],
        textStyle: {
          color: '#fff'
        },
        lineStyle: {
          color: '#fff'
        },
        itemStyle: {
          color: '#fff'
        }
      }
    }
  },

  mounted () {
    const personalityRadar = document.getElementById('personality-radar')
    this.personalityRadarChart = echarts.init(personalityRadar)
    this.personalityRadarChart.setOption(this.personalityRadarOption, true)

    const skillRadar = document.getElementById('skill-radar')
    this.skillRadarChart = echarts.init(skillRadar)
    this.skillRadarChart.setOption(this.skillRadarOption, true)

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
  color: $white
  overflow auto

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

    @media screen and (min-width: $mobileBreakPoint) {
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
