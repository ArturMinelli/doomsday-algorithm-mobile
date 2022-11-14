import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import { ptBR, enUS } from 'date-fns/locale'

import translations from '../assets/translations.json'

export const localesInfo = {
  'pt-BR': ptBR,
  'en-US': enUS,
}

interface LocalesInfo {
  'pt-BR': Locale;
  'en-US': Locale;
}

export type LocalesInfoKey = keyof LocalesInfo

const i18n = new I18n(translations)

i18n.defaultLocale='en-US'
i18n.locale = Localization.locale
i18n.enableFallback = true

export const language: I18n = i18n
