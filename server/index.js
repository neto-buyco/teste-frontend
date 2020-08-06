const faker = require('faker')
faker.locale = "pt_BR"

const data = { users: [] };

for (let index = 1; index <= 500; index++) {
    data.users.push({
        id: index,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        address: {
            zipCode: faker.address.zipCode(),
            city: faker.address.city(),
            streetAddress: faker.address.streetAddress(),
            country: faker.address.country(),
            state: faker.address.state(),
            geo: {
                latitude: faker.address.latitude(),
                longitude: faker.address.longitude()
            }
        }
    })
}


const fs = require('fs')
fs.writeFileSync('./database/db.json', JSON.stringify(data, null, 2), 'utf-8')

const jsonServer = require('json-server');
const server = jsonServer.create()
const router = jsonServer.router('./database/db.json')
const middlewares = jsonServer.defaults()
const PORT = 3000

server.use(middlewares)
server.use(router)
server.listen(PORT, () => {
    console.log(`JSON Server is running on PORT: ${PORT}`)
})