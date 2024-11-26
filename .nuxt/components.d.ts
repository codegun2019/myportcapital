
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'AboutHeadComponent': typeof import("../components/About/HeadComponent.vue")['default']
    'AccountingComponent': typeof import("../components/Accounting/AccountingComponent.vue")['default']
    'AccountingStartComponent': typeof import("../components/Accounting/StartComponent.vue")['default']
    'ContactHeadComponent': typeof import("../components/Contact/HeadComponent.vue")['default']
    'Cookiepolicy': typeof import("../components/Cookiepolicy.vue")['default']
    'DepositStartComponent': typeof import("../components/Deposit/StartComponent.vue")['default']
    'DepositTraditionComponent': typeof import("../components/Deposit/TraditionComponent.vue")['default']
    'DepositWithdrawComponent': typeof import("../components/Deposit/WithdrawComponent.vue")['default']
    'LandingBuysellComponent': typeof import("../components/Landing/BuysellComponent.vue")['default']
    'LandingHeaderComponent': typeof import("../components/Landing/HeaderComponent.vue")['default']
    'LandingMyportComponent': typeof import("../components/Landing/MyportComponent.vue")['default']
    'LandingPaymentComponent': typeof import("../components/Landing/PaymentComponent.vue")['default']
    'LandingReadyComponent': typeof import("../components/Landing/ReadyComponent.vue")['default']
    'LandingStartComponent': typeof import("../components/Landing/StartComponent.vue")['default']
    'LandingTraderComponent': typeof import("../components/Landing/TraderComponent.vue")['default']
    'LandingWordComponent': typeof import("../components/Landing/WordComponent.vue")['default']
    'LayoutsFooterComponent': typeof import("../components/Layouts/FooterComponent.vue")['default']
    'LayoutsNavbarComponent': typeof import("../components/Layouts/NavbarComponent.vue")['default']
    'MarketComponent': typeof import("../components/Market/MarketComponent.vue")['default']
    'MarketTraderComponent': typeof import("../components/Market/TraderComponent.vue")['default']
    'Notification': typeof import("../components/Notification.vue")['default']
    'PackageComponent': typeof import("../components/Package/PackageComponent.vue")['default']
    'PartnersAboutComponent': typeof import("../components/Partners/AboutComponent.vue")['default']
    'PartnersHeaderComponent': typeof import("../components/Partners/HeaderComponent.vue")['default']
    'PlatformBuyAndroidComponent': typeof import("../components/Platform/BuyAndroidComponent.vue")['default']
    'PlatformBuyIosComponent': typeof import("../components/Platform/BuyIosComponent.vue")['default']
    'PlatformMyportComponent': typeof import("../components/Platform/MyportComponent.vue")['default']
    'PlatformReadyComponent': typeof import("../components/Platform/ReadyComponent.vue")['default']
    'PlatformStartComponent': typeof import("../components/Platform/StartComponent.vue")['default']
    'PlatformTraderComponent': typeof import("../components/Platform/TraderComponent.vue")['default']
    'PrivacyPolicyModal': typeof import("../components/PrivacyPolicyModal.vue")['default']
    'PromotionStartComponent': typeof import("../components/Promotion/StartComponent.vue")['default']
    'PromotionTraditionComponent': typeof import("../components/Promotion/TraditionComponent.vue")['default']
    'PromotionWithdrawComponent': typeof import("../components/Promotion/WithdrawComponent.vue")['default']
    'ThePreloader': typeof import("../components/ThePreloader.vue")['default']
    'ComposablesArrowIcon': typeof import("../components/composables/ArrowIcon.vue")['default']
    'ComposablesForandroid': typeof import("../components/composables/Forandroid.vue")['default']
    'ComposablesForios': typeof import("../components/composables/Forios.vue")['default']
    'ComposablesStar': typeof import("../components/composables/Star.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtLinkLocale': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'SwitchLocalePathLink': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAboutHeadComponent': typeof import("../components/About/HeadComponent.vue")['default']
    'LazyAccountingComponent': typeof import("../components/Accounting/AccountingComponent.vue")['default']
    'LazyAccountingStartComponent': typeof import("../components/Accounting/StartComponent.vue")['default']
    'LazyContactHeadComponent': typeof import("../components/Contact/HeadComponent.vue")['default']
    'LazyCookiepolicy': typeof import("../components/Cookiepolicy.vue")['default']
    'LazyDepositStartComponent': typeof import("../components/Deposit/StartComponent.vue")['default']
    'LazyDepositTraditionComponent': typeof import("../components/Deposit/TraditionComponent.vue")['default']
    'LazyDepositWithdrawComponent': typeof import("../components/Deposit/WithdrawComponent.vue")['default']
    'LazyLandingBuysellComponent': typeof import("../components/Landing/BuysellComponent.vue")['default']
    'LazyLandingHeaderComponent': typeof import("../components/Landing/HeaderComponent.vue")['default']
    'LazyLandingMyportComponent': typeof import("../components/Landing/MyportComponent.vue")['default']
    'LazyLandingPaymentComponent': typeof import("../components/Landing/PaymentComponent.vue")['default']
    'LazyLandingReadyComponent': typeof import("../components/Landing/ReadyComponent.vue")['default']
    'LazyLandingStartComponent': typeof import("../components/Landing/StartComponent.vue")['default']
    'LazyLandingTraderComponent': typeof import("../components/Landing/TraderComponent.vue")['default']
    'LazyLandingWordComponent': typeof import("../components/Landing/WordComponent.vue")['default']
    'LazyLayoutsFooterComponent': typeof import("../components/Layouts/FooterComponent.vue")['default']
    'LazyLayoutsNavbarComponent': typeof import("../components/Layouts/NavbarComponent.vue")['default']
    'LazyMarketComponent': typeof import("../components/Market/MarketComponent.vue")['default']
    'LazyMarketTraderComponent': typeof import("../components/Market/TraderComponent.vue")['default']
    'LazyNotification': typeof import("../components/Notification.vue")['default']
    'LazyPackageComponent': typeof import("../components/Package/PackageComponent.vue")['default']
    'LazyPartnersAboutComponent': typeof import("../components/Partners/AboutComponent.vue")['default']
    'LazyPartnersHeaderComponent': typeof import("../components/Partners/HeaderComponent.vue")['default']
    'LazyPlatformBuyAndroidComponent': typeof import("../components/Platform/BuyAndroidComponent.vue")['default']
    'LazyPlatformBuyIosComponent': typeof import("../components/Platform/BuyIosComponent.vue")['default']
    'LazyPlatformMyportComponent': typeof import("../components/Platform/MyportComponent.vue")['default']
    'LazyPlatformReadyComponent': typeof import("../components/Platform/ReadyComponent.vue")['default']
    'LazyPlatformStartComponent': typeof import("../components/Platform/StartComponent.vue")['default']
    'LazyPlatformTraderComponent': typeof import("../components/Platform/TraderComponent.vue")['default']
    'LazyPrivacyPolicyModal': typeof import("../components/PrivacyPolicyModal.vue")['default']
    'LazyPromotionStartComponent': typeof import("../components/Promotion/StartComponent.vue")['default']
    'LazyPromotionTraditionComponent': typeof import("../components/Promotion/TraditionComponent.vue")['default']
    'LazyPromotionWithdrawComponent': typeof import("../components/Promotion/WithdrawComponent.vue")['default']
    'LazyThePreloader': typeof import("../components/ThePreloader.vue")['default']
    'LazyComposablesArrowIcon': typeof import("../components/composables/ArrowIcon.vue")['default']
    'LazyComposablesForandroid': typeof import("../components/composables/Forandroid.vue")['default']
    'LazyComposablesForios': typeof import("../components/composables/Forios.vue")['default']
    'LazyComposablesStar': typeof import("../components/composables/Star.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyNuxtLinkLocale': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'LazySwitchLocalePathLink': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AboutHeadComponent: typeof import("../components/About/HeadComponent.vue")['default']
export const AccountingComponent: typeof import("../components/Accounting/AccountingComponent.vue")['default']
export const AccountingStartComponent: typeof import("../components/Accounting/StartComponent.vue")['default']
export const ContactHeadComponent: typeof import("../components/Contact/HeadComponent.vue")['default']
export const Cookiepolicy: typeof import("../components/Cookiepolicy.vue")['default']
export const DepositStartComponent: typeof import("../components/Deposit/StartComponent.vue")['default']
export const DepositTraditionComponent: typeof import("../components/Deposit/TraditionComponent.vue")['default']
export const DepositWithdrawComponent: typeof import("../components/Deposit/WithdrawComponent.vue")['default']
export const LandingBuysellComponent: typeof import("../components/Landing/BuysellComponent.vue")['default']
export const LandingHeaderComponent: typeof import("../components/Landing/HeaderComponent.vue")['default']
export const LandingMyportComponent: typeof import("../components/Landing/MyportComponent.vue")['default']
export const LandingPaymentComponent: typeof import("../components/Landing/PaymentComponent.vue")['default']
export const LandingReadyComponent: typeof import("../components/Landing/ReadyComponent.vue")['default']
export const LandingStartComponent: typeof import("../components/Landing/StartComponent.vue")['default']
export const LandingTraderComponent: typeof import("../components/Landing/TraderComponent.vue")['default']
export const LandingWordComponent: typeof import("../components/Landing/WordComponent.vue")['default']
export const LayoutsFooterComponent: typeof import("../components/Layouts/FooterComponent.vue")['default']
export const LayoutsNavbarComponent: typeof import("../components/Layouts/NavbarComponent.vue")['default']
export const MarketComponent: typeof import("../components/Market/MarketComponent.vue")['default']
export const MarketTraderComponent: typeof import("../components/Market/TraderComponent.vue")['default']
export const Notification: typeof import("../components/Notification.vue")['default']
export const PackageComponent: typeof import("../components/Package/PackageComponent.vue")['default']
export const PartnersAboutComponent: typeof import("../components/Partners/AboutComponent.vue")['default']
export const PartnersHeaderComponent: typeof import("../components/Partners/HeaderComponent.vue")['default']
export const PlatformBuyAndroidComponent: typeof import("../components/Platform/BuyAndroidComponent.vue")['default']
export const PlatformBuyIosComponent: typeof import("../components/Platform/BuyIosComponent.vue")['default']
export const PlatformMyportComponent: typeof import("../components/Platform/MyportComponent.vue")['default']
export const PlatformReadyComponent: typeof import("../components/Platform/ReadyComponent.vue")['default']
export const PlatformStartComponent: typeof import("../components/Platform/StartComponent.vue")['default']
export const PlatformTraderComponent: typeof import("../components/Platform/TraderComponent.vue")['default']
export const PrivacyPolicyModal: typeof import("../components/PrivacyPolicyModal.vue")['default']
export const PromotionStartComponent: typeof import("../components/Promotion/StartComponent.vue")['default']
export const PromotionTraditionComponent: typeof import("../components/Promotion/TraditionComponent.vue")['default']
export const PromotionWithdrawComponent: typeof import("../components/Promotion/WithdrawComponent.vue")['default']
export const ThePreloader: typeof import("../components/ThePreloader.vue")['default']
export const ComposablesArrowIcon: typeof import("../components/composables/ArrowIcon.vue")['default']
export const ComposablesForandroid: typeof import("../components/composables/Forandroid.vue")['default']
export const ComposablesForios: typeof import("../components/composables/Forios.vue")['default']
export const ComposablesStar: typeof import("../components/composables/Star.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAboutHeadComponent: typeof import("../components/About/HeadComponent.vue")['default']
export const LazyAccountingComponent: typeof import("../components/Accounting/AccountingComponent.vue")['default']
export const LazyAccountingStartComponent: typeof import("../components/Accounting/StartComponent.vue")['default']
export const LazyContactHeadComponent: typeof import("../components/Contact/HeadComponent.vue")['default']
export const LazyCookiepolicy: typeof import("../components/Cookiepolicy.vue")['default']
export const LazyDepositStartComponent: typeof import("../components/Deposit/StartComponent.vue")['default']
export const LazyDepositTraditionComponent: typeof import("../components/Deposit/TraditionComponent.vue")['default']
export const LazyDepositWithdrawComponent: typeof import("../components/Deposit/WithdrawComponent.vue")['default']
export const LazyLandingBuysellComponent: typeof import("../components/Landing/BuysellComponent.vue")['default']
export const LazyLandingHeaderComponent: typeof import("../components/Landing/HeaderComponent.vue")['default']
export const LazyLandingMyportComponent: typeof import("../components/Landing/MyportComponent.vue")['default']
export const LazyLandingPaymentComponent: typeof import("../components/Landing/PaymentComponent.vue")['default']
export const LazyLandingReadyComponent: typeof import("../components/Landing/ReadyComponent.vue")['default']
export const LazyLandingStartComponent: typeof import("../components/Landing/StartComponent.vue")['default']
export const LazyLandingTraderComponent: typeof import("../components/Landing/TraderComponent.vue")['default']
export const LazyLandingWordComponent: typeof import("../components/Landing/WordComponent.vue")['default']
export const LazyLayoutsFooterComponent: typeof import("../components/Layouts/FooterComponent.vue")['default']
export const LazyLayoutsNavbarComponent: typeof import("../components/Layouts/NavbarComponent.vue")['default']
export const LazyMarketComponent: typeof import("../components/Market/MarketComponent.vue")['default']
export const LazyMarketTraderComponent: typeof import("../components/Market/TraderComponent.vue")['default']
export const LazyNotification: typeof import("../components/Notification.vue")['default']
export const LazyPackageComponent: typeof import("../components/Package/PackageComponent.vue")['default']
export const LazyPartnersAboutComponent: typeof import("../components/Partners/AboutComponent.vue")['default']
export const LazyPartnersHeaderComponent: typeof import("../components/Partners/HeaderComponent.vue")['default']
export const LazyPlatformBuyAndroidComponent: typeof import("../components/Platform/BuyAndroidComponent.vue")['default']
export const LazyPlatformBuyIosComponent: typeof import("../components/Platform/BuyIosComponent.vue")['default']
export const LazyPlatformMyportComponent: typeof import("../components/Platform/MyportComponent.vue")['default']
export const LazyPlatformReadyComponent: typeof import("../components/Platform/ReadyComponent.vue")['default']
export const LazyPlatformStartComponent: typeof import("../components/Platform/StartComponent.vue")['default']
export const LazyPlatformTraderComponent: typeof import("../components/Platform/TraderComponent.vue")['default']
export const LazyPrivacyPolicyModal: typeof import("../components/PrivacyPolicyModal.vue")['default']
export const LazyPromotionStartComponent: typeof import("../components/Promotion/StartComponent.vue")['default']
export const LazyPromotionTraditionComponent: typeof import("../components/Promotion/TraditionComponent.vue")['default']
export const LazyPromotionWithdrawComponent: typeof import("../components/Promotion/WithdrawComponent.vue")['default']
export const LazyThePreloader: typeof import("../components/ThePreloader.vue")['default']
export const LazyComposablesArrowIcon: typeof import("../components/composables/ArrowIcon.vue")['default']
export const LazyComposablesForandroid: typeof import("../components/composables/Forandroid.vue")['default']
export const LazyComposablesForios: typeof import("../components/composables/Forios.vue")['default']
export const LazyComposablesStar: typeof import("../components/composables/Star.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyNuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const LazySwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
