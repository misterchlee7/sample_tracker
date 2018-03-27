// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth0: {
    domain: "sampletracker.auth0.com",
    clientId: "4CzVwmedxbjcIHHWMm72hnVd09CUWnQ0",
    callbackURL: "http://localhost:8000/admin/dash"
  }
};
