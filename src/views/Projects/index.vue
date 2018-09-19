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
          class="project"
          :style="{'background-image': `url('${project.imageUrl}')`}">
          <a
            class="project-title">
            {{ project.name }}
          </a>
          <!-- <img :src="project.imageUrl"> -->
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
    display: flex
    align-items: center
    justify-content center
    margin: 20px
    width: 200px
    height: 150px
    background-size: cover
    transition: all .3s

    .project-title {
      opacity: 0
      transition: opacity .3s
    }

    &:hover {
      opacity: .7

      .project-title {
        opacity: 1
      }
    }
  }

  .project-move {
    transition: transform 1s
  }
}

</style>
