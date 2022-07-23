import supertest from 'supertest'
import { resizer } from '../utils'
import app from '../index'

// create a request object
const request = supertest(app)

describe('Test endpoint response', () => {
  const validFile = 'santamonica'
  const invalidFile = 'santamonica123'
  const width = 200
  const height = 200
  const invalidWidth = 2000
  const imagePath = `../../../Images/${validFile}.jpg`
  it('test the home page or main endpoint', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
    expect(response.text).toBe(
      'use /images to check out the api usage example: localhost:{portnumber in this case 5000}/images'
    )
  })
  it('test the /images end point', async () => {
    const response = await request.get('/images')
    expect(response.status).toBe(200)
  })
  it('test /images/api with valid name without width or height', async () => {
    const response = await request.get(`/images/api?filename=${validFile}`)
    expect(response.status).toBe(200)
  })
  it('test /images/api with invalid name', async () => {
    const response = await request.get(`/images/api?filename=${invalidFile}`)
    expect(response.status).toBe(400)
    expect(response.text).toBe('image not found')
  })
  it('test /images/api with valid name but missing width', async () => {
    const response = await request.get(`/images/api?filename=${validFile}&width=${width}`)
    expect(response.status).toBe(400)
    expect(response.text).toBe(
      'missing parameters or misspell in the query please check your input'
    )
  })
  it('test /images/api with valid name but missing height', async () => {
    const response = await request.get(`/images/api?filename=${validFile}&height=${height}`)
    expect(response.status).toBe(400)
    expect(response.text).toBe(
      'missing parameters or misspell in the query please check your input'
    )
  })
  it('test /images/api with invalid name but correct width and height', async () => {
    const response = await request.get(
      `/images/api?filename=${invalidFile}&width=${width}&height=${height}`
    )
    expect(response.status).toBe(400)
    expect(response.text).toBe('wrong image name')
  })
  it('test files with invalid width or height', async () => {
    const response = await request.get(
      `/images/api?filename=${validFile}&width=${invalidWidth}&height=${height}`
    )
    expect(response.status).toBe(400)
    expect(response.text).toBe('bad values for Width and Height')
  })
  it('test resizer method with valid width and height and filename', async () => {
    expect(
      await resizer(
        imagePath,
        width,
        height,
        `../../../Images/Resized/${validFile}_${width}_${height}.jpg`
      )
    ).toContain(`${width}`)
  })
})
