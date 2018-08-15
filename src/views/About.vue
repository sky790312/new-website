<template>
  <div
    id="about"
    class="grid-container">
    <div class="grid-item header">
      <div>New era of Frontend Development</div>
      <div>標語...</div>
    </div>
    <div class="grid-item main">
      <div>放一個skill chart</div>
    </div>
    <div class="grid-item sidebar2">
     <div>放一個line chart</div>
   </div>
    <div class="grid-item sidebar">
      <div>年資</div>
    </div>
    <div class="grid-item footer">
      <div>duty</div>
    </div>
      <div class="grid-item footer2">
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
    display: grid;
    grid-template-columns: 0.167fr 0.167fr 0.167fr 0.167fr 0.167fr 0.167fr;
    grid-template-rows: 0.2fr 0.4fr 0.4fr;
    grid-template-areas:
      "header header header header header header"\
      "main main main main main main"\
      "sidebar2 sidebar2 sidebar2 sidebar2 sidebar2 sidebar2"\
      "sidebar sidebar sidebar sidebar sidebar sidebar"\
      "footer footer footer footer footer footer"\
      "footer2 footer2 footer2 footer2 footer2 footer2";
    grid-column-gap: 10px;
    grid-row-gap: 15px;

    @media screen and (min-width: $mobileBreakPoint) {
      grid-template-areas:
        "header header header header header header"\
        "main main main sidebar2 sidebar2 sidebar2"\
        "sidebar sidebar footer footer footer2 footer2";
    }
  }

  .grid-item div {
    display: flex;
    color: #fff;
    font-size: 2em;
    justify-content: center;
    align-items: center;
    // height: 100%;
  }

  .header {
    background-color: #8BC574;
    grid-area: header;
  }

  .main {
    background-color: #748CC5;
    grid-area: main;
  }

  .sidebar {
    background-color: #C57474;
    grid-area: sidebar;
  }

  .sidebar2 {
    background-color: #C57474;
    grid-area: sidebar2;
  }

  .footer {
    background-color: #FCE052;
    grid-area: footer;
  }

  .footer2 {
    background-color: #FCE052;
    grid-area: footer2;
  }
}

</style>
