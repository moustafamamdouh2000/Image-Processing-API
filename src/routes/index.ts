import express, { Request, Response, Router } from 'express'
import images from './api'
import { readImageDirContent } from '../utils'
const router: Router = express.Router()

router.use('/api', images)

router.get('/', (_req: Request, res: Response) => {
  const imageDir = readImageDirContent()
  let message: string;
  imageDir.forEach((elemnt) => {
    if (elemnt == 'Resized') return
    message = message.concat(elemnt.concat('<br>')).replace('.jpg', '')
  })
  res
    .status(200)
    .send(
      `to use the api, add the desired image to images folder then follow the specific syntax here: "/images/api?filename={your jpg image name no spaces}&width={yourDesiredWidth}&height={yourDesiredHeight}" without quotation<br>the images available in the folder are:<br>${message}<br>you can use the following syntax to view the image /images/api/filename={name} to view the picture<br><br> the Output image can be found in the Resized folder inside the Images folder`
    )
})

export default router
