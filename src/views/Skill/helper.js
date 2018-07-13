// x: 1~18, y: 1~10
export const SKILLS = [{
  name: 'main',
  title: 'Main skills',
  position: {
    pc: {
      x: 6,
      y: 3
    },
    mobile: {
      x: 9,
      y: 1
    }
  },
  child: [{
    name: 'vue',
    title: 'Vue',
    desc: 'Vuex, VueI18n, Vue Router',
    position: {
      pc: {
        x: 4,
        y: 5
      },
      mobile: {
        x: 7,
        y: 3
      }
    }
  }, {
    name: 'es2015',
    title: 'ES2015',
    desc: 'Async / Await',
    position: {
      pc: {
        x: 5,
        y: 5
      },
      mobile: {
        x: 8,
        y: 3
      }
    }
  }, {
    name: 'test',
    title: 'Test',
    desc: 'unit test: Karma, Jest, e2e test: Cypress',
    position: {
      pc: {
        x: 6,
        y: 5
      },
      mobile: {
        x: 9,
        y: 3
      }
    }
  }, {
    name: 'aframe',
    title: 'A-Frame',
    desc: 'three.js, WebVR, WebGL, 3dio.js',
    position: {
      pc: {
        x: 7,
        y: 5
      },
      mobile: {
        x: 10,
        y: 3
      }
    }
  }, {
    name: 'css',
    title: 'CSS',
    desc: 'CSS3, postcss, sass/scss, less, stylus',
    position: {
      pc: {
        x: 8,
        y: 5
      },
      mobile: {
        x: 11,
        y: 3
      }
    }
  }, {
    name: 'd3',
    title: 'D3.js',
    desc: 'charts',
    position: {
      pc: {
        x: 4,
        y: 6
      },
      mobile: {
        x: 7,
        y: 4
      }
    }
  }, {
    name: 'thirdparty',
    title: 'Third party APIs',
    desc: 'gapi, ga, fb..',
    position: {
      pc: {
        x: 5,
        y: 6
      },
      mobile: {
        x: 8,
        y: 4
      }
    }
  }, {
    name: 'tools',
    title: 'tools',
    desc: 'webpack, Git, Shell script, Jenkins',
    position: {
      pc: {
        x: 6,
        y: 6
      },
      mobile: {
        x: 9,
        y: 4
      }
    }
  }, {
    name: 'scrum',
    title: 'Scrum',
    desc: 'Redmine, Trello',
    position: {
      pc: {
        x: 7,
        y: 6
      },
      mobile: {
        x: 10,
        y: 4
      }
    }
  }, {
    name: 'nodejs',
    title: 'Node.js',
    desc: 'Express',
    position: {
      pc: {
        x: 8,
        y: 6
      },
      mobile: {
        x: 11,
        y: 4
      }
    }
  }]
}, {
  name: 'other',
  title: 'Other skills',
  position: {
    pc: {
      x: 13,
      y: 3
    },
    mobile: {
      x: 9,
      y: 6
    }
  },
  child: [{
    name: 'react',
    title: 'React',
    desc: 'react-redux, react-route, react-thunk, css module',
    position: {
      pc: {
        x: 11,
        y: 5
      },
      mobile: {
        x: 7,
        y: 8
      }
    }
  }, {
    name: 'reactnative',
    title: 'React Native',
    desc: 'Shoutem UI, NativeBase, Navigator',
    position: {
      pc: {
        x: 12,
        y: 5
      },
      mobile: {
        x: 8,
        y: 8
      }
    }
  }, {
    name: 'seo',
    title: 'SEO',
    desc: 'Google Analytics',
    position: {
      pc: {
        x: 13,
        y: 5
      },
      mobile: {
        x: 9,
        y: 8
      }
    }
  }, {
    name: 'baas',
    title: 'BaaS',
    desc: 'Firebase, LeanCloud',
    position: {
      pc: {
        x: 14,
        y: 5
      },
      mobile: {
        x: 10,
        y: 8
      }
    }
  }, {
    name: 'paas',
    title: 'PaaS',
    desc: 'GCP, AWS EC2, Azure',
    position: {
      pc: {
        x: 15,
        y: 5
      },
      mobile: {
        x: 11,
        y: 8
      }
    }
  }, {
    name: 'jquery',
    title: 'jQuery',
    desc: '',
    position: {
      pc: {
        x: 11,
        y: 6
      },
      mobile: {
        x: 7,
        y: 9
      }
    }
  }, {
    name: 'angularjs',
    title: 'AngularJS',
    desc: '',
    position: {
      pc: {
        x: 12,
        y: 6
      },
      mobile: {
        x: 8,
        y: 9
      }
    }
  }, {
    name: 'mvc',
    title: 'MVC',
    desc: 'Ruby on Rails, Java Play',
    position: {
      pc: {
        x: 13,
        y: 6
      },
      mobile: {
        x: 9,
        y: 9
      }
    }
  }, {
    name: 'database',
    title: 'Database',
    desc: 'MySQL, NoSQL',
    position: {
      pc: {
        x: 14,
        y: 6
      },
      mobile: {
        x: 10,
        y: 9
      }
    }
  }, {
    name: 'cms',
    title: 'CMS',
    desc: 'WordPress',
    position: {
      pc: {
        x: 15,
        y: 6
      },
      mobile: {
        x: 11,
        y: 9
      }
    }
  }]
}]

/* eslint-disable */
export const transform = (targets, duration, css3dObjects, render) => {
  TWEEN.removeAll()
  css3dObjects.map((object, index) => {
    let target = targets[index]
    new TWEEN.Tween(object.position)
      .to({
        x: target.position.x,
        y: target.position.y,
        z: target.position.z},
        Math.random() * duration + duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start()
    new TWEEN.Tween(object.rotation)
      .to({
        x: target.rotation.x,
        y: target.rotation.y,
        z: target.rotation.z},
        Math.random() * duration + duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start()
  })
  new TWEEN.Tween()
    .to({}, duration * 2)
    .onUpdate(render)
    .start()
}
