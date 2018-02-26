# Webpack Introduction By Example

This repository is a very simple example application. We start from scratch without webpack
and build up a webpack.config.js like it looks in most projects.

Just take a look at the commits to go through step by step.

# Commands & Cheatsheet

Just a few commands / snippets that help when you want to show/present this to someone.

To present it's easiest when you checkout the current master and run `npm install` there to install
all the dependencies at once (Less time waiting for npm while presenting...)

- `cp README.md CHEATSHEET.md`
- `git checkout initial`
- `git checkout inline-js-css`
- `git checkout extract-js-css`
- `git checkout show-hotel`
- `git checkout add-button`
- `git checkout hotel-data-file`
- `git checkout introduce-ellipsize`
- `git checkout add-webpack`
- `git checkout require-hotel-js`
- `git checkout webpack-config`
- `git checkout fancy-js`
- `git checkout add-babel-loader`
- `git checkout babel-preset-env`
- `git checkout use-react`
- `git checkout babel-preset-react`
- `git checkout sass`
- `git checkout extract-text-plugin`
- `git checkout less-noisy`
- `git checkout release-task-and-source-maps`
- `git checkout bundle-analyzer`
- `git checkout define-plugin`
- `git checkout uglify`
- `git checkout gzip`
- `git checkout hash-names`
- `git checkout clean-dist`
- `git checkout assets-json`
- `git checkout html-webpack-plugin`
- `git checkout dynamic-import`
- `git checkout content-hashg`
- `git checkout vendor-bundle`
- `git checkout named-modules`

- npm init -y
- npm install --save-dev ellipsize
- npm i -D webpack@3.11.0
- ./node_modules/.bin/webpack
- npx webpack
- npx webpack --outputFilename=./dist/main.js
- npx webpack --outputFilename=./dist/main.js --entry ./src/index.js
- npm i -D babel-loader babel-core
- npm i -D babel-preset-env
- npm i react react-dom
- npm i babel-preset-react
- npm i -D node-sass style-loader css-loader sass-loader
- npm i -D extract-text-webpack-plugin
- npm i -D webpack-bundle-analyzer
- ANALYZE=1 npm run release
- npm i -D webpack-assets-by-type-plugin
- npm i -D html-webpack-plugin
- npm i -D babel-plugin-syntax-dynamic-import
