# profservice.app (profservice)

Приложение по вызову специалиста

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

profservice % icongenie p \  
 -o prod \
 -i ./public/icon.png \
 -b ./public/splash.png \
 --splashscreen-icon-ratio 0 \
 --skip-trim \

icongenie g -p ./icongenie-prod.json

## Build android

sudo ./zipalign -v 4 /Users/raulbajmuhametov/Desktop/works/quasar/profservice/src-capacitor/android/app/release/app-release.aab Profservice.aab
