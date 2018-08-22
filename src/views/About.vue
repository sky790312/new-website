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
    <div class="grid-item personality-radar">
      <div id="test" style="width: 100%;height: 100%;"></div>
    </div>
    <div class="grid-item skill-treemap">
     <div>放一個line chart</div>
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
    <!-- <div class="grid-item section4">
      <h3>I believe that being a senior rontend developer, not only have to focus on how deep frontend world is, but alse need to have relevant field domain. Knowing what backend＆Design thinking and why.</h3>
      <h1 style="text-align: right;">By Kevin Hu</h1>
    </div> -->
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

export default {
  name: 'About',

  components: {
  },

  data () {
    return {

    }
  },

  mounted () {
    var dom = document.getElementById('test')
    var myChart = echarts.init(dom) // eslint-disable-line
    var option = {
      // title: {
      //   text: 'Ability'
      // },
      tooltip: {
        trigger: 'axis'
      },
      radar: [{
        indicator: [
          {text: 'Frontend', max: 100},
          {text: 'Backend', max: 100},
          {text: 'Seo', max: 100},
          {text: 'Unit, e2e test', max: 100},
          {text: 'Git', max: 100}
        ],
        radius: 80
      }],
      series: [{
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data: [{
          value: [85, 70, 70, 70, 75],
          name: 'Skills'
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

    if (option && typeof option === 'object') {
      myChart.setOption(option, true)
    }
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
      "skill-treemap"\
      "mermer-container"\
      "duty-container"\
      "award-container"
    grid-column-gap: 15px
    grid-row-gap: 15px
    // grid-auto-columns: auto
    // grid-auto-rows: minmax(400px, auto)

    @media screen and (min-width: $mobileBreakPoint) {
      grid-template-columns: repeat(6, 1fr)
      grid-template-rows: 1fr 2fr 2fr
      grid-template-areas:
        "brief brief brief brief brief brief"\
        "personality-radar personality-radar personality-radar skill-treemap skill-treemap skill-treemap"\
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
    padding: 0
  }

  .mermer-container {
    background-color: #8174c5
    grid-area: mermer-container
  }

  .skill-treemap {
    background-color: #C57474
    grid-area: skill-treemap
  }

  .duty-container {
    background-color: #dfc024
    grid-area: duty-container
  }

  .award-container {
    background-color: #8BC574
    grid-area: award-container
  }

  // .section4 {
  //   grid-area: section4
  // }
}

</style>
