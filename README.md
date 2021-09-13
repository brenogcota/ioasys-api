![image](https://user-images.githubusercontent.com/46490801/133023716-4afcc1d9-67ae-4a2f-9bd4-e54f60ce6737.png)

# IOASYS - Enterprises API

Steps to run this project:

```sh
➜  api git:(master) ✗ npm i
➜  api git:(master) ✗ cp .env.example .env
➜  api git:(master) ✗ npx typeorm migration:run
➜  api git:(master) ✗ npm run dev
```

Test's

```sh
➜  api git:(master) ✗ npm run test
```

## Endpoint Documentation
for this project the thunder client was used

```sh
docs/thunder-collection_ioasys-api.json
```

### Dependencies 
- axios
- cors
- dotenv
- express
- express-rate-limit
- express-slow-down
- helmet
- joi
- jsonwebtoken
- morgan
- pg
- reflect-metadata
- typeorm
- uuid
- winston

### DevDependencies 
- nodemon
- jest