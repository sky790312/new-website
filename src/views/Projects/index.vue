<template>
  <div
    id="projects">
    <div id="sudoku-demo" class="demo">
      <h1>Projects</h1>
      <button @click="shuffle">
        Shuffle
      </button>
      <transition-group
        name="project"
        tag="div"
        class="container">
        <div 
          v-for="project in projects"
          :key="project.name"
          class="project">
          <!-- <a
            class="project-title">
            {{ project.name }}
          </a> -->
          <img
            :src="project.imageUrl"
            class="project-image">
          <div class="project-title">
            {{ project.name }}
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import {
  PROJECTS
} from '@/views/Projects/data'

function shuffle (sourceArray) {
  for (var i = 0; i < sourceArray.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (sourceArray.length - i))

    var temp = sourceArray[j]
    sourceArray[j] = sourceArray[i]
    sourceArray[i] = temp
  }
  return sourceArray
}

export default {
  name: 'Projects',

  components: {
  },

  data () {
    return {
      projects: PROJECTS
    }
  },

  computed: {
  },

  methods: {
    shuffle: function () {
      this.projects = [...shuffle(this.projects)]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styl/variables'

#projects {
  color: $white

  .container {
    display: flex
    flex-wrap: wrap
    // width: 105px;
    // margin-top: 10px;
  }

  .project {
    position relative
    display: flex
    align-items: center
    justify-content center
    margin: 20px
    width: 200px
    height: 150px
    cursor: pointer
    overflow: hidden
    transition: all .3s

    &:hover {
      padding: 5px

      .project-image {
        opacity: .3
      }

      .project-title {
        opacity: 1
      }
    }

    .project-image, .project-title {
      transition: opacity .3s ease
    }

    .project-title {
      position absolute
      width: 100%
      height: 100%
      display flex
      justify-content: center
      align-items: center
      opacity: 0
    }
  }

  .project-move {
    transition: transform 1s
  }
}

</style>
