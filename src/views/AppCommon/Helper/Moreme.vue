<template>
  <div
    id="moreme">
    <a
      class="close"
      @click="closeMoremeContainer()">
      x
    </a>
    <h1>
      {{ $t('helper.menu.moreme') }}
    </h1>
    <div
      class="moreme-item">
      <div
        class="moreme-left">
        <h3>            
          {{ $t('helper.moreme.intro') }}
        </h3>
      </div>
      <div
        class="moreme-right">
        <img
          :src="working1ImageUrl">
      </div>
    </div>
    <div
      class="moreme-item">
      <div
        class="moreme-left">
        <img
          :src="working2ImageUrl">
      </div>
      <div
        class="moreme-right">
        {{ $t('helper.moreme.working') }}
      </div>
    </div>
    <div
      class="moreme-item">
      <div
        class="moreme-left">
        {{ $t('helper.moreme.basketball') }}
      </div>
      <div
        class="moreme-right">
        <img
          :src="extroverted1ImageUrl">
      </div>
    </div>
    <div
      class="moreme-item">
      <div
        class="moreme-left">
        <img
          :src="extroverted2ImageUrl">
      </div>
      <div
        class="moreme-right">
        {{ $t('helper.moreme.dance') }}
      </div>
    </div>
    <div
      class="moreme-item">
      <div
        class="moreme-left">
        {{ $t('helper.moreme.photo') }}
      </div>
      <div
        class="moreme-right">
        <img
          :src="introverted1ImageUrl">
      </div>
    </div>
    <div
      class="moreme-item">
      <div
        class="moreme-left">
        <img
          :src="introverted2ImageUrl">
      </div>
      <div
        class="moreme-right">
        {{ $t('helper.moreme.instrument') }}
      </div>
    </div>
    <div
      class="moreme-item">
      <div
        class="moreme-left">
        {{ $t('helper.moreme.family') }}
      </div>
      <div
        class="moreme-right">
        <img
          :src="family1ImageUrl">
      </div>
    </div>
    <h2>
      <a
        @click="closeMoremeContainer()">
        <i
          class="fa fa-1x fa-chevron-left">
        </i>
        Back
      </a>
    </h2>
  </div>
</template>

<script>

export default {
  name: 'AboutWebsite',

  data () {
    return {
      working1ImageUrl: require('~assets/helper/working-img1.jpg'),
      working2ImageUrl: require('~assets/helper/working-img2.jpg'),
      extroverted1ImageUrl: require('~assets/helper/extroverted-img1.jpg'),
      extroverted2ImageUrl: require('~assets/helper/extroverted-img2.jpg'),
      introverted1ImageUrl: require('~assets/helper/introverted-img1.jpg'),
      introverted2ImageUrl: require('~assets/helper/introverted-img2.jpg'),
      family1ImageUrl: require('~assets/helper/family-img1.jpg')
    }
  },

  methods: {
    closeMoremeContainer () {
      this.$emit('closeMenuContainer', 'moreme')
    }
  }
}
</script>

<style lang="stylus" scoped>
#moreme {
  position: absolute
  top: 0
  right: 0
  width: 100%
  height: "calc(100% - %s)" % $helper-footer-height
  overflow-y: auto
  padding: 20px
  background-color: #E67F86

  @media screen and (min-width: $mobile-break-point) {
    width: 50%
  }

  .close {
    position: absolute
    top: 10px
    right: 15px
    cursor: pointer
    font-size: 24px
    font-weight: bold
    line-height: 24px
  }

  .about-website-desc {
    font-size: 18px
  }

  .about-website-img {
    max-width: 100%
  }
}

.moreme-container {
  right: 0
  background-color: #E67F86
}

.moreme-item {
  display: flex
  flex-wrap: wrap
  margin: 20px 0

  &:nth-child(even) {
    flex-direction: column-reverse

    @media screen and (min-width: $mobile-break-point) {
      flex-direction: row
    }
  }

  .moreme-left, .moreme-right {
    @extend .flex-center   
    width: 100%   
    padding: 20px

    @media screen and (min-width: $mobile-break-point) {
      width: 50%   
    }
  }

  img {
    max-width: 100%
  }
}

</style>
