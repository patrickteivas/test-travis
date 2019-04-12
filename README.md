Install all dependencies:
```sh
npm install
```

Create .env file:
```sh
cp sample.env .env
```

Run lint tests:
```sh
npm run lint
```

Run unit tests:
```sh
npm run unit
```

Run visual tests:
```sh
npm run e2e
```
*NOTE* Windows must have environment variable PATH with `C:\Program Files\Java\jdk1.7.0\bin` value.

Run all tests:
```sh
npm run test
```

Upload screenshots to Dropbox:
```sh
npm run upload
```