# Juno Portfolio Backend

## Start server
`npm run server`

#### Setup Database
Login to postgres instance as root postgres user:
```
psql postgres
```

Create juno database:
```
CREATE DATABASE juno;
```

Give permissions to your postgres_user:
```
GRANT ALL PRIVILEGES ON DATABASE juno TO {{postgres_user}};
```

Run migrations:
```
npm run migrate;
```
