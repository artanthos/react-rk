const aliases = (prefix = './src') => ({
  Common: `${prefix}/Common`,
  Components: `${prefix}/Components`,
  Config: `${prefix}/Config`,
  Contexts: `${prefix}/Contexts`,
  Constants: `${prefix}/Constants`,
  Hooks: `${prefix}/Hooks`,
  Helpers: `${prefix}/Helpers`,
  Icons: `${prefix}/Assets/Icons`,
  Layouts: `${prefix}/Layouts`,
  Localizations: `${prefix}/Localizations`,
  Modals: `${prefix}/Modals`,
  Routes: `${prefix}/Routes`,
  Schemas: `${prefix}/Schemas`,
  Services: `${prefix}/Services`,
  Styled: `${prefix}/Styled`,
  Styles: `${prefix}/Styles`,
  Themes: `${prefix}/Themes`,
  Utils: `${prefix}/Utils`,
  Views: `${prefix}/Views`,
  Redux: `${prefix}/Redux`,
});

module.exports = aliases;
