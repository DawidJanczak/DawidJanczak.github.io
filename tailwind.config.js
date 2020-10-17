module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [
    '_drafts/*.html',
    '_layouts/*.html',
    '_posts/*.html',
    '*.html'
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
