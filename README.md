# tailwindcss-gutenberg
> Tailwindcss plugin to generate Gutenberg colour utilities.

<!-- TODO - Add installation -->
<!-- ## Installation
```bash
yarn add tailwindcss-gutenberg
```

or

```bash
npm install tailwlindcss-gutenberg
``` -->

## ⚙️ Usage
Add the following to your plugins array:
```js
// tailwind.config.js

{
  theme: {
    //
  },
  plugins: [
    require('tailwindcss-gutenberg')(),
  ]
}
```

## ✏️ Notes

The WordPress Gutenberg editor applies the following classes to paragraph blocks when changing the text colour or background colour:

#### Text Colour
`has-${colour}-color`

#### Background Colour
`has-${colour}-background-colour`

This plugin generates all the necessary text and background colours based on the colours defined in your theme.


## 🐘 PHP Setup
In order to make your tailwind colours available to the Gutenberg editor you'll need to add your theme colours via the `add_theme_support('editor-color-palette)` function.

Example:
```php
add_theme_support('editor-color-palette', [
    [
        'name' => 'Scholastic Orange',
        'slug' => 'scholastic-orange',
        'color' => '#F9A13B',
    ],
]);
```
