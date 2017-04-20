# angularjs-seed

[![Dependency Status](https://david-dm.org/EmandM/angularjs-seed/status.svg)](https://david-dm.org/EmandM/angularjs-seed#info=dependencies) [![devDependency Status](https://david-dm.org/EmandM/angularjs-seed/dev-status.svg)](https://david-dm.org/EmandM/angularjs-seed#info=devDependencies)

Branched from [preboot/angularjs-webpack](https://github.com/preboot/angularjs-webpack). All credit for initial config goes there.

A complete, yet simple, starter for Angular using Webpack.

Branched from [preboot/angularjs-webpack](https://github.com/preboot/angularjs-webpack). All credit for initial config goes there

This workflow serves as a starting point for building Angular 1.x applications using Webpack 2.x.
The initial project is set up with [AngularJs](https://angularjs.org/), [Angular Material](https://material.angularjs.org/latest/), [Ui Router](https://ui-router.github.io/), [Restangular](https://github.com/mgonto/restangular), [Lodash](https://lodash.com/), [MomentJs](https://momentjs.com/), and [Font Awesome](http://fontawesome.io/). This set of packages will give you a project that takes very little time to get a professional looking application up and running.

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts.
* Built in Javascript linting.

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

> Clone/Download the repo then add components inside [`/src/app/components`](/src/app/components)
> Access these components from `app.routing.js` inside [`/src/app/app.routing.js`](/src/app/app.routing.js)

```bash
# clone the repo
$ git clone https://github.com/EmandM/angularjs-seed.git web-app

# change directory to your app
$ cd web-app

# install the dependencies with npm
$ npm install

# start the server
$ npm run dev
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm`
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm run dev
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm run dev`

### Linter

This project has Javascript linting built in. The webpack server will not start if there are linting errors.
Most code editors will show lint errors inside the editor with some setup.
* Run linter: `npm run lint`
* Fix common errors: `npm run lint-fix`

## Testing

#### 1. Unit Tests

* single run: `npm run test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)
