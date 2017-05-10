Seed project for a Express server implemented in Typescript
===========================================================

This is an example project for an Express server implemented in typescript.

NPM command scripts
-------------------

- `start`: builds the server and then starts it.
- `start:watch`: starts the server and continuously rebuilds it if any
  typescript file changes; to be used in development.
- `test`: executes the tests.
- `test:watch`: starts the test execution and continuously restarts tests if
  any typescript file changes; to be used in development.
- `clean`: clean out all *.js and *.map.js (resulting from Typescript
  compilation) files from _./src_ and _./test_.

About the application structure
-------------------------------
The application is built on a structure of routers and sub-routers
corresponding to the resource structure of the REST API, which has its root in `api/`. Each 
sub-router is placed in its own 
module directory:

- `src/v1-resource`: provides the implementation of the sub-router for
  `/api/v1/...`
- `src/v1-resource/jobs-resource`: provides the implementation of the 
  sub-router for `api/v1/jobs/...`
- `src/v1-resource/users-resource`: provides the implementation of the
  sub-router for `api/v1/users/...`

Each of the module directories has a corresponding BDD style test specification 
in `./test`.  