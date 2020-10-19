module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [
    '_drafts/*.html',
    '_layouts/*.html',
    '_posts/*.html',
    '_includes/*.html',
    '*.html'
  ],
  theme: {},
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
