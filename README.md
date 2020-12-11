# Employees

API sederhana untuk memenuhi technical test, untuk soal 1 - 3 file jawabannya ada didalam folder : src/customFunctions.

## Installation

1. Pakai npm/yarn untuk menginstall semua dependency dan juga install dev-dependency untuk sequelize-cli.

```bash
npm install
```

2. Jalankan migration
```bash
npx sequelize db:migrate
```

3. Jalankan seeder (optional)
```bash
npx sequelize db:seed:all
```

4. Edit file config untuk mengkoneksikan ke database di dalam folder : config/config.json
```
"development": {
    "username": "root",
    "password": "isikan_password",
    "database": "isikan_nama_database",
    "host": "127.0.0.1",
    "dialect": "mysql",
  }
```

5. Edit package.json untuk menambahkan script nodemon
```
"scripts": {
    "dev": "nodemon index.js"
  }
```

6. Jalankan server dengan nodemon
```bash
npm run dev
```
