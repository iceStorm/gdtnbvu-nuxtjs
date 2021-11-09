<template>
  <div id="footer-main">
      <div class="inner-page">
        <section class="footer-main-section contact">
          <h4 class="footer-main-section-title">{{ $t('footer.mainTitles[0]') }}</h4>
          <div class="footer-main-section-content">
            <div class="contact-default">
              <div class="contact-item" v-for="item in contactItems" :key="item.href">
                <span class="text">{{ item.caption[$i18n.locale] }}:</span>
                <a target="_blank" :href="hrefConvert(item.href)">
                  {{ item.title }}
                </a>
              </div>
            </div>

            <div class="contact-social" style="padding-top: 35px;">
              <h4 class="footer-main-section-title">{{ $t('footer.mainTitles[1]') }}</h4>
              <div class="contact-social-content">
                <a v-for="item in $store.state.meta.social_media_links"
                  :key="item.social_link"
                  :href="hrefConvert(item.social_link)"
                  target="_blank">
                  {{ item.social_name }}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="footer-main-section links">
          <h4 class="footer-main-section-title">{{ $t('footer.mainTitles[2]') }}</h4>
          <ul class="footer-main-section-content">
            <li v-for="item in $store.state.menu.items" :key="item.href">
              <nuxt-link :to="{ path: ($i18n.locale === 'en' ? ('/' + $i18n.locale) : '') + item.href }">
                {{ item.title[$i18n.locale] }}
              </nuxt-link>
            </li>
          </ul>
        </section>

        <section class="footer-main-section legals">
          <h4 class="footer-main-section-title">{{ $t('footer.mainTitles[3]') }}</h4>
          <ul class="footer-main-section-content">
            <li v-for="item in otherLinks" :key="item.href">
              <a :href="item.href" target="_blank">
                {{ item.title[$i18n.locale] }}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
</template>
