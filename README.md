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
sub-router is placed in its own module directory:

- `src/api`: provides the express root application resource for `api/...`
- `src/api/v1-resource`: provides the implementation of the sub-router for
  `/api/v1/...`
- `src/api/v1-resource/jobs-resource`: provides the implementation of the 
  sub-router for `api/v1/jobs/...`. This resource provides an example of 
  posting jobs into a queue (based on [Kue](http://automattic.github.io/kue/))
  which executes the jobs in the background. 
- `src/api/v1-resource/users-resource`: provides the implementation of the
  sub-router for `api/v1/users/...`. The resource mimics a DB server which 
  just returns a list of user names.

Each of the module directories has a corresponding BDD style test specification 
in `./test`. These tests use [mocha](https://mochajs.org/) as test runner and 
[chai](http://chaijs.com/) for assertions.  

Dependencies
------------
The _Kue_ component is based on [Redis](https://redis.io/). In order to run the
server a _Redis_ instance must be created. A suggestion is to use the official 
[Redis docker image](https://hub.docker.com/_/redis/).