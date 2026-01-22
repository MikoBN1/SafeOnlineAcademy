import { createI18n } from 'vue-i18n'
// Import index.ts from locales to allow split loading if preferred, 
// or directly import json files. For now we will structure it to load JSONs.
import en from './locales/en.json'
import ru from './locales/ru.json'
import kz from './locales/kz.json'

const i18n = createI18n({
    legacy: false, // Use Composition API
    locale: 'en', // default locale
    fallbackLocale: 'en',
    messages: {
        en,
        ru,
        kz
    }
})

export default i18n
