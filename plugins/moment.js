import Vue from "vue";
import moment from "moment";

// const getLocale = function () {
//   let locale = 'uz';
//   if (this._i18n.locale === 'uz') {
//     locale = 'uz_latn';
//   } else if (this._i18n.locale === 'ru') {
//     locale = 'ru_RU';
//   } else if (this._i18n.locale === 'en') {
//     locale = 'en_EN';
//   }
//   return locale;
// };

Vue.prototype.$moment = moment;

Vue.prototype.$moment = function (date, type) {
  // const locale = getLocale.call(this);
  if (type) {
    // return moment(date).locale(locale).format(type);
    return moment(date).format(type);
  }
};

