const _ = require('lodash');
const _flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = () => {
  return ({theme, variants, e, addBase, addUtilities}) => {
    const colours = (0, _flattenColorPalette.default)(theme('colors'));

    const utilities = _.map(colours, (val, name) => ({
      // Text colour
      [`.${e(`has-${name}-color`)}`]: {
        color: val
      },

      // Background colour
      [`.${e(`has-${name}-background-color`)}`]: {
        backgroundColor: val
      }
    }));

    addUtilities(utilities);
  }
}
