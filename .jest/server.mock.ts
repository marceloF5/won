global.fetch = require('node-fetch')
import {server} from '../src/utils/mockServer/server'

beforeAll(()=>{
    // listen all requests in tests
    server.listen()
})

afterEach(()=>{
    // restart all handlers in case they are called again
    server.resetHandlers()
})

afterAll(()=>{
    // close the server and clean tests
    server.close()
})

