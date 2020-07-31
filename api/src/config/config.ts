export default {
    port: process.env.PORT || 3333,
    secretyKey: process.env.SECRETYKEY || 'f1655343-307d-4a26-805c-1814fc5f8b37',
    publicRoutes: process.env.PUBLICROUTES || [
        'user/create',
        'users/auth',
        '/customer/create'
    ]
}