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
    typography: {
      default: {
        css: {
          a: false
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
