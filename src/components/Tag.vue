<template>
  <div class="tag">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'tag',
  props: {
    text: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

$white = #fff
$light-blue = #4380Be
$light-blue2 = #47a1ff

$tag-color = $white
$tag-bkg-color = $light-blue
$tag-bkg-hover-color = $light-blue2

.tag {
	margin: 5px
	padding: 5px 8px
	color: $tag-color
	background-color: $tag-bkg-color
	cursor: default
  border-radius: 5px

	&:hover {
		background-color: $tag-bkg-hover-color
	}
}

</style>
