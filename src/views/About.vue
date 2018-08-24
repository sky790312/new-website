<template>
  <div
    id="about"
    class="grid-container">
    <div class="grid-item brief">
      <h1>New era of Frontend Development</h1>
      <h3>I'm a creative frontend developer with about 5 years of professional experience, based in Taiwan now.</h3>
      <h3>I develop modern, interactive, responsive, multiple-language and cross browser's web application. Always keep in touch to the modern frontend's world and extend my ability to backend's and UIUX's world.</h3>
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
    <div class="grid-item mermer-container">
      <h3>Mermer: </h3>
      <div>A senior frontend developer should always clearly issue and find the best solution for different situation. Has hide communication skill with backend and UIUX even with PM.</div>
      <div style="text-align: right;">Kevin Hu</div>
    </div>
    <div class="grid-item duty-container">
      <h3>Duty: </h3>
      <ul>
        <li>RWD</li>
        <li>SPA</li>
        <li>SSR</li>
        <li>Cross browser support</li>
        <li>Multiple-language RTL website</li>
      </ul>
    </div>
    <div class="grid-item award-container">
      <h3>Awards: </h3>
      <ul>
        <li>JSDC Taiwan 2017 speaker</li>
        <li>Aframe weekly post</li>
        <li>Tutor and piecework</li>
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
      "mermer-container"\
      "duty-container"\
      "award-container"
    grid-column-gap: 15px
    grid-row-gap: 15px
    grid-auto-columns: minmax(auto, 100%)

    @media screen and (min-width: $mobileBreakPoint) {
      grid-template-columns: repeat(6, 1fr)
      grid-template-rows: 1fr 2fr 2fr
      grid-template-areas:
        "brief brief brief brief brief brief"\
        "personality-radar personality-radar personality-radar skill-radar skill-radar skill-radar"\
        "mermer-container mermer-container duty-container duty-container award-container award-container"
    }
  }

  .grid-item {
    padding: 20px
    // display: flex
    color: $white
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

  .mermer-container {
    background-color: #8174c5
    grid-area: mermer-container
  }

  .duty-container {
    background-color: #ccaf1c
    grid-area: duty-container
  }

  .award-container {
    background-color: #8BC574
    grid-area: award-container
  }
}

</style>
