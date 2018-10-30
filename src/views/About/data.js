export const PERSONALITY_RADAR_SETTING = {
  tooltip: {
    trigger: 'axis'
  },
  radar: [{
    indicator: [
      { text: 'Responsiveness', max: 100 },
      { text: 'Patience', max: 100 },
      { text: 'Leading', max: 100 },
      { text: 'Communication', max: 100 }
    ],
    radius: 80
  }],
  series: [{
    type: 'radar',
    tooltip: {
      trigger: 'item'
    },
    itemStyle: {
      normal: {
        areaStyle: {
          type: 'default'
        }
      }
    },
    data: [{
      value: [90, 80, 75, 80],
      name: 'Personality: '
    }]
  }],
  textStyle: {
    color: '#fff'
  },
  lineStyle: {
    color: '#fff'
  },
  itemStyle: {
    color: '#fff'
  }
}

export const SKILL_RADAR_SETTING = {
  tooltip: {
    trigger: 'axis'
  },
  radar: [{
    indicator: [
      { text: 'Frontend', max: 100 },
      { text: 'Backend', max: 100 },
      { text: 'Seo', max: 100 },
      { text: 'Test', max: 100 },
      { text: 'Git', max: 100 }
    ],
    radius: 80
  }],
  series: [{
    type: 'radar',
    tooltip: {
      trigger: 'item'
    },
    itemStyle: {
      normal: {
        areaStyle: {
          type: 'default'
        }
      }
    },
    data: [{
      value: [90, 70, 80, 80, 80],
      name: 'Skills: '
    }]
  }],
  textStyle: {
    color: '#fff'
  },
  lineStyle: {
    color: '#fff'
  },
  itemStyle: {
    color: '#fff'
  }
}

