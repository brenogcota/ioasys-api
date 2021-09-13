![image](https://user-images.githubusercontent.com/46490801/133023716-4afcc1d9-67ae-4a2f-9bd4-e54f60ce6737.png)

# IOASYS - Enterprises API

Steps to run this project:

```sh
➜  api git:(master) ✗ npm i
➜  api git:(master) ✗ cp .env.example .env
➜  api git:(master) ✗ npx typeorm migration:run
➜  api git:(master) ✗ npm run dev
```

### Populate database
```sh
psql (12.8 (Ubuntu 12.8-0ubuntu0.20.04.1))                         
Type "help" for help.                                              
                                                                   
postgres=# insert into position (id, name) values('91265781-5294-4f5e-869b-36c59873e3d6', 'ADMIN')
postgres=# insert into user (id, name, email, borndate, uf, city, companyId, positionId, schooling, created_at) values('91265781-5294-4f5e-869b-36c59873e3d6', 'super user', 'user@super.net', '1999-06-30', 'MG', 'Berilo', '', '91265781-5294-4f5e-869b-36c59873e3d6', 'Médio', '2021-09-12 01:08:25.259589')

```


Test's

```sh
➜  api git:(master) ✗ npm run test
```

```sh
PASS  test/position.test.js
PASS  test/session.test.js
PASS  test/api.test.js

Test Suites: 0 failed, 6 passed, 6 total
Tests:       0 failed, 19 passed, 19 total
Snapshots:   0 total
Time:        2.437 s
Ran all test suites.
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