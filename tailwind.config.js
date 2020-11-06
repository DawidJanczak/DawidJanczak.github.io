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
    extend: {
      colors: {
        accent: '#E6F2F2',
        'top-100-bg': '#4F6E83',
        'top-100-text': '#B6D1E4'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
