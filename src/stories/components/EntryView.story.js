/* eslint-disable */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import VueI18n from 'vue-i18n'

import locales from '@/locales'
import EntryView from '@/views/EntryView/index.vue'

storiesOf('Page', module)
  .add('entry view', () => ({
    components: { EntryView },
    i18n: new VueI18n({
      locale: 'en',
      messages: locales
    }),
    template: `
      <entry-view
        @shouldShowEntryView="action">
      </entry-view>
    `,
    methods: { action: action('clicked') }
  }))
