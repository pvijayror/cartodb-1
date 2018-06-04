const glob = require('glob');
const { resolve } = require('path');

const rootDir = file => resolve(__dirname, '../../', file);
const removeDuplicated = array => Array.from(new Set(array));

module.exports = {
  common: removeDuplicated([
    rootDir('assets/stylesheets/common/utilities.scss'),
    rootDir('assets/stylesheets/common/icon-font-specials.scss'),
    ...glob.sync(rootDir('assets/stylesheets/common/**/*.scss')),
    rootDir('node_modules/cartoassets/src/scss/entry.scss')
  ]),

  deep_insights: [
    rootDir('assets/stylesheets/deep-insights/entry.scss'),
    rootDir('node_modules/internal-carto.js/themes/scss/entry.scss')
  ],

  public_map: glob.sync(rootDir('assets/stylesheets/public_map/**/*.scss')),

  dashboard: [
    rootDir('lib/assets/javascripts/dashboard/dashboard.js'),
    ...glob.sync(rootDir('assets/stylesheets/dashboard/*.scss')),
    rootDir('assets/stylesheets/editor-3/_scroll-view.scss'),
    rootDir('node_modules/internal-carto.js/themes/scss/entry.scss')
  ],

  public_table_new: rootDir('lib/assets/javascripts/dashboard/public-dataset.js'),

  public_dashboard: [
    rootDir('lib/assets/javascripts/dashboard/public-dashboard.js'),
    ...glob.sync(rootDir('assets/stylesheets/public_dashboard/**/*.scss')),
    rootDir('assets/stylesheets/public_map/public_map_buttons.scss'),
    rootDir('assets/stylesheets/public_map/public_map_footer.scss')
  ],

  user_feed: [
    rootDir('lib/assets/javascripts/dashboard/user-feed.js'),
    ...glob.sync(rootDir('assets/stylesheets/user_feed/**/*.scss'))
  ],

  api_keys_new: [
    rootDir('lib/assets/javascripts/dashboard/api-keys.js'),
    rootDir('assets/stylesheets/dashboard/api-keys.scss'),
    rootDir('vendor/assets/stylesheets/tipsy.css'),
    rootDir('node_modules/internal-carto.js/themes/scss/entry.scss')
  ],

  data_library_new: rootDir('lib/assets/javascripts/dashboard/data-library.js'),

  mobile_apps: [
    rootDir('lib/assets/javascripts/dashboard/mobile-apps.js'),
    ...glob.sync(rootDir('assets/stylesheets/mobile_apps/*.css'))
  ],

  account: rootDir('lib/assets/javascripts/dashboard/account.js'),

  profile: rootDir('lib/assets/javascripts/dashboard/profile.js'),

  sessions: [
    rootDir('lib/assets/javascripts/dashboard/sessions.js'),
    rootDir('assets/stylesheets/common/flash-message.scss'),
    rootDir('assets/stylesheets/common/tooltip.scss'),
    rootDir('assets/stylesheets/common/logo.scss'),
    rootDir('node_modules/cartoassets/src/scss/entry.scss'),
    ...glob.sync(rootDir('assets/stylesheets/sessions/*.scss'))
  ],

  confirmation: rootDir('lib/assets/javascripts/dashboard/confirmation.js'),

  organization: [
    rootDir('lib/assets/javascripts/dashboard/organization.js'),
    rootDir('assets/stylesheets/plugins/tagit.scss'),
    ...glob.sync(rootDir('assets/stylesheets/organization/*.scss')),
    rootDir('assets/stylesheets/editor-3/_assets.scss'),
    rootDir('assets/stylesheets/editor-3/_modals-layout.scss'),
    rootDir('assets/stylesheets/editor-3/_tab-pane.scss'),
    rootDir('assets/stylesheets/editor-3/_modals-elements.scss'),
    rootDir('assets/stylesheets/editor-3/_scroll-view.scss')
  ]
};