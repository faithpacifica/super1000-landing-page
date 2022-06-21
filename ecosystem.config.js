module.exports = {
  apps: [
    {
      name: 'super1000-landing',
      exec_mode: 'cluster',
      instances: '1',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}
