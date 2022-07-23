import express, { Router, Request, Response } from 'express'
import {
  checkImageExist,
  resizer,
  viewCachedImage,
  checkCache,
  returnCachedImage,
  checkWidth,
  checkHeight,
  creatDir
} from '../../utils'
const images: Router = express.Router()

images.get('/', async (req: Request, res: Response): Promise<void> => {
  const { filename, width, height } = req.query
  const fileName: string = filename as string
  const Width: number = parseInt(width as string)
  const Height: number = parseInt(height as string)
  creatDir()
  if (fileName && !Width && !Height) {
    if (checkImageExist(fileName)) {
      console.log('test')
      res.status(200).sendFile(viewCachedImage(fileName))
    } else {
      res.status(400).send('image not found')
    }
  } else if (fileName && (isNaN(Width) || isNaN(Height))) {
    res.status(400).send('missing parameters or misspell in the query please check your input')
  } else if (fileName) {
    if (checkImageExist(fileName)) {
      if (!checkCache(fileName, Width, Height)) {
        if (checkWidth(Width) && checkHeight(Height)) {
          res
            .status(200)
            .sendFile(
              await resizer(
                `../../../Images/${fileName}.jpg`,
                Width,
                Height,
                `../../../Images/Resized/${fileName}_${Width}_${Height}.jpg`
              )
            )
        } else {
          res.status(400).send('bad values for Width and Height')
        }
      } else {
        console.log('Image exists already , serving the chached image')
        res.status(200).sendFile(returnCachedImage(fileName, Width, Height))
      }
    } else {
      res.status(400).send('wrong image name')
    }
  }
})

export default images
