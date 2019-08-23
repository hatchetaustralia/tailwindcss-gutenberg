const _ = require('lodash');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const gutenbergPlugin = require('./index.js');

const generatePluginCss = (config) => {
  return postcss(
    tailwindcss(
      _.merge({
        theme: {
          colors: {
            'red': 'red',
            'white': 'white',
            'black': 'black',
            'indigo': 'indigo',
            'gainsboro': 'gainsboro',
            gray: {
              '400': '#bdbdbd',
              '500': '#9e9e9e',
              '600': '#757575',
            }
          },
        },
        corePlugins: false,
        plugins: [
          gutenbergPlugin(),
        ],
      }, config)
    )
  )
  .process('@tailwind base; @tailwind utilities', {
    from: undefined,
  })
  .then(result => {
    return result.css;
  });
};

expect.extend({
  toMatchCss: cssMatcher,
});

test('the plugin generates utilities based on theme colours', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(`
      .has-red-color {
        color: red;
      }

      .has-red-background-color {
        background-color: red;
      }

      .has-white-color {
        color: white;
      }

      .has-white-background-color {
        background-color: white;
      }

      .has-black-color {
        color: black;
      }

      .has-black-background-color {
        background-color: black;
      }

      .has-indigo-color {
        color: indigo;
      }

      .has-indigo-background-color {
        background-color: indigo;
      }

      .has-gainsboro-color {
        color: gainsboro;
      }

      .has-gainsboro-background-color {
        background-color: gainsboro;
      }

      .has-gray-400-color {
        color: #bdbdbd;
      }

      .has-gray-400-background-color {
        background-color: #bdbdbd;
      }

      .has-gray-500-color {
        color: #9e9e9e;
      }

      .has-gray-500-background-color {
        background-color: #9e9e9e;
      }

      .has-gray-600-color {
        color: #757575;
      }

      .has-gray-600-background-color {
        background-color: #757575;
      }
    `)
  });
});
