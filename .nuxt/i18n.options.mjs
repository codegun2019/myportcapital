
// @ts-nocheck
import locale_C_58_C_58_Users_gmcod_Desktop_myportcapital_locales_en_json from "../locales/en.json";
import locale_C_58_C_58_Users_gmcod_Desktop_myportcapital_locales_th_json from "../locales/th.json";
import locale_C_58_C_58_Users_gmcod_Desktop_myportcapital_locales_zh_json from "../locales/zh.json";
import locale_C_58_C_58_Users_gmcod_Desktop_myportcapital_locales_jp_json from "../locales/jp.json";
import locale_C_58_C_58_Users_gmcod_Desktop_myportcapital_locales_lo_json from "../locales/lo.json";


export const localeCodes =  [
  "en",
  "th",
  "zh",
  "jp",
  "lo"
]

export const localeLoaders = {
  "en": [{ key: "../locales/en.json", load: () => Promise.resolve(locale_C_58_C_58_Users_gmcod_Desktop_myportcapital_locales_en_json), cache: true }],
  "th": [{ key: "../locales/th.json", load: () => Promise.resolve(locale_C_58_C_58_Users_gmcod_Desktop_myportcapital_locales_th_json), cache: true }],
  "zh": [{ key: "../locales/zh.json", load: () => Promise.resolve(locale_C_58_C_58_Users_gmcod_Desktop_myportcapital_locales_zh_json), cache: true }],
  "jp": [{ key: "../locales/jp.json", load: () => Promise.resolve(locale_C_58_C_58_Users_gmcod_Desktop_myportcapital_locales_jp_json), cache: true }],
  "lo": [{ key: "../locales/lo.json", load: () => Promise.resolve(locale_C_58_C_58_Users_gmcod_Desktop_myportcapital_locales_lo_json), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "name": "English",
      "language": "en-US",
      "files": [
        "C:/Users/gmcod/Desktop/myportcapital/locales/en.json"
      ]
    },
    {
      "code": "th",
      "name": "ไทย",
      "language": "th-TH",
      "files": [
        "C:/Users/gmcod/Desktop/myportcapital/locales/th.json"
      ]
    },
    {
      "code": "zh",
      "name": "中文",
      "language": "zh-CN",
      "files": [
        "C:/Users/gmcod/Desktop/myportcapital/locales/zh.json"
      ]
    },
    {
      "code": "jp",
      "name": "日本語",
      "language": "ja-JP",
      "files": [
        "C:/Users/gmcod/Desktop/myportcapital/locales/jp.json"
      ]
    },
    {
      "code": "lo",
      "name": "ລາວ",
      "language": "lo-LA",
      "files": [
        "C:/Users/gmcod/Desktop/myportcapital/locales/lo.json"
      ]
    }
  ],
  "defaultLocale": "th",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "no_prefix",
  "lazy": false,
  "langDir": "locales/",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "name": "English",
    "language": "en-US",
    "files": [
      {
        "path": "C:/Users/gmcod/Desktop/myportcapital/locales/en.json"
      }
    ]
  },
  {
    "code": "th",
    "name": "ไทย",
    "language": "th-TH",
    "files": [
      {
        "path": "C:/Users/gmcod/Desktop/myportcapital/locales/th.json"
      }
    ]
  },
  {
    "code": "zh",
    "name": "中文",
    "language": "zh-CN",
    "files": [
      {
        "path": "C:/Users/gmcod/Desktop/myportcapital/locales/zh.json"
      }
    ]
  },
  {
    "code": "jp",
    "name": "日本語",
    "language": "ja-JP",
    "files": [
      {
        "path": "C:/Users/gmcod/Desktop/myportcapital/locales/jp.json"
      }
    ]
  },
  {
    "code": "lo",
    "name": "ລາວ",
    "language": "lo-LA",
    "files": [
      {
        "path": "C:/Users/gmcod/Desktop/myportcapital/locales/lo.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
