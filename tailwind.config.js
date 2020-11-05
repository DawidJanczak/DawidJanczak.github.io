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
    '_top_100/*.html',
    '_small_top_100/*.html',
    '*.html'
  ],
  theme: {
    colors: {
      accent: '#E6F2F2'
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
