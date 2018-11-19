<template>
  <a-entity>
    <a-text
      :value="entryTitle.text"
      :position="entryTitle.position"
      :width="entryTitle.width">
    </a-text>
    <a-text
      :value="entryDesc.text"
      :position="entryDesc.position"
      :width="entryDesc.width">
    </a-text>
  </a-entity>
</template>

<script>

export default {
  name: 'entryText',

  data () {
    return {
      entryTitle: {
        text: `Welcome to KevinHu's website`,
        position: '-2.2 0.6 0',
        width: 7
      },
      entryDesc: {
        text: `Please move to the following section and click!`,
        position: '-3.3 0 0',
        width: 7
      }
    }
  }
}
</script>
