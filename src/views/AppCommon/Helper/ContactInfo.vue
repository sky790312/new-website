<template>
  <div
    id="contact-info">
    <div>
      <p>
        Online CV: 
        <a
          class="link"
          target="_blank"
          href="mailto:sky790312yks@gmail.com">
          Link
        </a>
      </p>
      <p>
        Email:
        <a
          class="link"
          target="_blank"
          href="https://sky790312.herokuapp.com/cv-english.pdf">
          sky790312yks@gmail.com
        </a>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContactInfo'
}
</script>

<style lang="stylus" scoped>
#contact-info {
  position: absolute
  bottom: 0
  width: 100%
  height: $helper-footer-height
  text-align: center
  background-color: $black

  .link {
    color: $white
  }
}

</style>
