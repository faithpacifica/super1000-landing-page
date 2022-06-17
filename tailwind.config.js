const screens = {}
for (let i = 1440; i >= 320; i--) {
  screens[`-${i}`] = { max: `${i}px` }
}

module.exports = {
  mode: 'jit',
  // purge: {
    content: ["./src/**/*.{html,js,vue}"],
    theme: {
      extend: {},
      screens: {
        sm: '640px',
        md: '860px',
        lg: '1024px',
        xl: '1280px',
        ...screens,
      },
    },
  // },
  darkMode: 'class'
}
