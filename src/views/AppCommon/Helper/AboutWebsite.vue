<template>
  <div
    id="aboute-website">
    <a
      class="close"
      @click="closeAboutWebsiteContainer()">
      x
    </a>
    <h1>
      {{ $t('helper.menu.aboutWebsite') }}
    </h1>
    <p
      class="about-website-desc">
      {{ $t('helper.aboutWebsite.desc') }}          
    </p>
    <img
      class="about-website-img"
      loop="infinite"
      :src="entryPageImageUrl">
    <h3>
      {{ $t('helper.aboutWebsite.conclusion') }}
      <i
        class="fa fa-3x fa-hand-peace-o">
      </i>
    </h3>
  </div>
</template>

<script>

export default {
  name: 'AboutWebsite',

  data () {
    return {
      entryPageImageUrl: require('~assets/helper/entry-page.gif')
    }
  },

  methods: {
    closeAboutWebsiteContainer () {
      this.$emit('closeMenuContainer', 'aboutWebsite')
    }
  }
}
</script>

<style lang="stylus" scoped>
#aboute-website {
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: "calc(100% - %s)" % $helper-footer-height
  overflow-y: auto
  padding: 20px
  background-color: $green3

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

</style>
