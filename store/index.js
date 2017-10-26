import supportedLocales from '@/locales/supportedLocales'

export const state = () => ({
  locales: supportedLocales,
  locale: 'en',
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
}
