import Vue from 'vue'
import VueI18n from 'vue-i18n'
import supportedLocales from '@/locales/supportedLocales'

Vue.use(VueI18n)

const getMessages = () => {
  const messages = {}
  supportedLocales.forEach(locale => {
    messages[locale] = require(`@/locales/${locale}`).default
  })
  return messages
}

export default ({ app, isClient, store, serverStore }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: getMessages(),
  })
}
