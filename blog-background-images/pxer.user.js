// ==UserScript==
// @name           Pxer
// @name:zh-CN     Pxer
// @name:en-US     Pxer
// @name:ja-JP     Pxer
// @description    Maybe the best tool for pixiv.net for capture pictures
// @description:zh-CN 可能是目前最好用的P站批量抓图工具
// @description:en-US Maybe the best tool for pixiv.net for capture pictures
// @description:ja-JP Pixiv の全てのツールで一番使いやすいバッチキャプチャーソフトかもしれない
// @icon           https://pxer-app.pea3nut.org/public/favicon.ico
// @version        7
// @homepageURL    http://pxer.pea3nut.org/
// @supportURL     https://github.com/FoXZilla/Pxer/issues/new/choose
// @author         pea3nut / eternal-flame-AD
// @grant          unsafeWindow
// @noframes
// @updateURL      https://pxer-app.pea3nut.org/pxer.user.js
// @require        https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js
// @include        https://www.pixiv.net*
// @include        http://www.pixiv.net*
// @include        http://pxer.pea3nut.org*
// @include        https://pxer.pea3nut.org*
// ==/UserScript==
javascript: void(function() {

unsafeWindow['PXER_URL'] = 'https://pxer-app.pea3nut.org/';
unsafeWindow['PXER_MODE'] = 'native';
unsafeWindow['Vue'] = Vue;

// add enter point script in page
document.documentElement.appendChild(
    document.createElement('script')
).src = PXER_URL + 'launcher.js?' + (+new Date);

}());