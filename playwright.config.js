// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout : 30*1000,
  expect : {
    timeout : 5000,
  },
  reporter : 'html',

  use: {
    
      browserName : 'chromium',
      //browserName : 'webkit'
      headless : false,
      trace : 'retain-on-failure',
      screenshot: 'only-on-failure',
      video: 'retain-on-failure'
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    
  },

  
    
});
module.exports = config

