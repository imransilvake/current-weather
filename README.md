# React Seed
React seed is using create-react-app, and it incorporates many best practices typically needed in large apps.


## Content
- [X] SCSS Inclusion
- [X] Linting: `scss, js`
- [X] Build Environments: `dev, next, prod`
- [X] Translation (i18n)


## Libraries and Frameworks

#### External 
- [X] [Create React App](https://github.com/facebook/create-react-app)
- [X] [Translation](https://github.com/i18next/react-i18next)


## Environments
In order to serve the build folder, run the following command first:
```
yarn global add serve
```

|Serve|Script|Description|
|---|---|---|
|Development|`yarn start`|Serve the application @ `localhost:3000`|
|Next|`yarn serve`|Serve the application @ `localhost:3000`|
|Production|`yarn serve`|Serve the application @ `localhost:3000`|

|Build|Script|Description|
|---|---|---|
|Development|`yarn build:development`|Build the application to `./build` directory|
|Next|`yarn build:next`|Build the application to `./build` directory|
|Production|`yarn build:production`|Build the application to `./build` directory|


## Linting
|Script|Description|
|---|---|
|`yarn lint:es`|Lint JSX|
|`yarn lint:scss`|Lint SCSS|
