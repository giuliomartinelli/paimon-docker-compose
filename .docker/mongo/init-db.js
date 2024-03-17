db.createUser({
    user: 'development',
    pwd: 'development',
    roles: [{ role: 'readWrite', db: 'development' }]
});