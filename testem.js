module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  launch_in_ci: [
    'Chrome'
  ],
  launch_in_dev: [
    'Chrome'
  ],
  // browser_paths: {
  //   "Chromium": "./node_modules/puppeteer/.local-chromium/linux-706915/chrome"
  // },
  browser_args: {
    Chrome: {
      ci: [
        // --no-sandbox is needed when running Chrome inside a container
        process.env.CI || process.env.GITPOD_HOST ? '--no-sandbox' : null,
        process.env.GITPOD_HOST ? '--disable-setuid-sandbox' : null,
        '--headless',
        '--disable-dev-shm-usage',
        '--disable-software-rasterizer',
        '--mute-audio',
        '--remote-debugging-port=0',
        '--window-size=1440,900'
      ].filter(Boolean)
    }
  }
};
