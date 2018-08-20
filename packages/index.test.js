const packages = require('./');

describe('Packages', () => {
  [
    'bodyParser', 'compression', 'cookieParser', 'csurf', 'debug', 'dotenv',
    'expressDataParser', 'expressSession', 'extend', 'helmet', 'loadware',
    'log', 'methodOverride', 'mz', 'pathToRegexpWrap', 'pkgDir', 'responseTime',
    'serveFavicon', 'socketioWildcard'
  ].forEach(key => {
    it(`contains ${key}`, () => {
      expect(Object.keys(packages)).toContain(key);
    })
  });
});
