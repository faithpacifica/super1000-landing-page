const screens = {}
for (let i = 1440; i >= 320; i--) {
  screens[`-${i}`] = { max: `${i}px` }
}

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
    theme: {
      extend: {},
      screens: {
        'xs': {'max': '639px'},
        sm: '640px',
        md: '860px',
        lg: '1024px',
        xl: '1280px',
        ...screens,
      },
    },
  },
  darkMode: 'class'
}
