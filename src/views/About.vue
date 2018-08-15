<template>
  <div
    id="about"
    class="grid-container">
    <div class="grid-item header">
      <div>New era of Frontend Development</div>
      <!-- <h4>Everything happen in Frontend Development</h4> -->
      <!-- <div>A senior frontend developer should always clearly issue and .</div> -->
    </div>
    <div class="grid-item pie-chart">
      <div>放一個skill chart</div>
    </div>
    <div class="grid-item line-chart">
     <div>放一個line chart</div>
   </div>
    <div class="grid-item section1">
      <div>年資 </div>
    </div>
    <div class="grid-item section2">
      <div>duty</div>
    </div>
      <div class="grid-item section3">
      <div>Adwards</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',

  components: {
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'

#about {
  color: $white

  &.grid-container {
    display: grid
    grid-template-columns: 0.167fr 0.167fr 0.167fr 0.167fr 0.167fr 0.167fr
    grid-template-rows: 0.2fr 0.4fr 0.4fr
    grid-template-areas:
      "header header header header header header"\
      "pie-chart pie-chart pie-chart pie-chart pie-chart pie-chart"\
      "line-chart line-chart line-chart line-chart line-chart line-chart"\
      "section1 section1 section1 section1 section1 section1"\
      "section2 section2 section2 section2 section2 section2"\
      "section3 section3 section3 section3 section3 section3"
    grid-column-gap: 15px
    grid-row-gap: 15px

    @media screen and (min-width: $mobileBreakPoint) {
      grid-template-areas:
        "header header header header header header"\
        "pie-chart pie-chart pie-chart line-chart line-chart line-chart"\
        "section1 section1 section2 section2 section3 section3"
    }
  }

  .grid-item {
    display: flex
    color: $white
    font-size: 2em
    justify-content: center
    align-items: center
    // height: 100%;
  }

  .header {
    grid-area: header
  }

  .pie-chart {
    background-color: #748CC5
    grid-area: pie-chart
  }

  .section1 {
    background-color: #8174c5
    grid-area: section1
  }

  .line-chart {
    background-color: #C57474
    grid-area: line-chart
  }

  .section2 {
    background-color: #FCE052
    grid-area: section2
  }

  .section3 {
    background-color: #8BC574
    grid-area: section3
  }
}

</style>
