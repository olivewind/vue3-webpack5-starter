const DIRECTIVES = {};

export function registerDirectives(app) {
  Object.keys(DIRECTIVES).forEach((key) => {
    app.component(key, DIRECTIVES[key]);
  });
}
