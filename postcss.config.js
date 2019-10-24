let environment = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-nested')
  ]
};

module.exports = environment;

if (process.env.LOCAL_ENV === 'production') {
  require('@fullhuman/postcss-purgecss')({
    content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  });
}
