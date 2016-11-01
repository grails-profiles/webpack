# Grails Webpack Profile

[![Build Status](https://travis-ci.org/grails-profiles/webpack.svg?branch=master)](https://travis-ci.org/grails-profiles/webpack)

Profile for building Grails applications with node-based frontends via webpack

This profile is fairly minimal and is intended as a base for other profiles, such as the `react` profile: https://github.com/grails-profiles/react

It configures webpack to bundle Javacsript source files from `src/main/webapp` and output them into the `grails-app/assets` directory. Custom tasks are added to `build.gradle` in order to streamline the bundling process when the Grails application is ran or assembled as a WAR/JAR file.

In addition the profile does provide one feature which installs the babel transpiler (https://babeljs.io/) to bundle ES6 code. Use the `--features=babel` flag when generating your application to install the feature.
