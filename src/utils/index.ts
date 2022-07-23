import fs from 'fs'
import sharp from 'sharp'
import path from 'path'

const files: string[] = fs.readdirSync(path.resolve(__dirname + '../../../Images'))
export const checkPathexist = (path: string): boolean => {
  return fs.existsSync(path)
}

export const readImageDirContent = (): string[] => {
  return fs.readdirSync(path.resolve(__dirname + '../../../Images'))
}

export const checkImageExist = (imageName: string): boolean => {
  return files.indexOf(`${imageName}.jpg`) >= 0
}

export const viewCachedImage = (fileName: string): string => {
  return path.resolve(`${__dirname}+../../../Images/${fileName}.jpg`)
}

export const checkCache = (fileName: string, width: number, height: number): boolean => {
  const cachedFiles = fs.readdirSync(path.resolve(__dirname + '../../../Images/Resized'))
  return cachedFiles.indexOf(`${fileName}_${width}_${height}.jpg`) >= 0
}

export const resolveNewImage = (fileName: string): string => {
  return path.resolve(`${__dirname}+../../../Images/${fileName}.jpg`)
}

export const returnCachedImage = (fileName: string, width: number, height: number) => {
  return path.resolve(__dirname + '../../../Images/Resized/' + `${fileName}_${width}_${height}.jpg`)
}

export const checkWidth = (width: number): boolean => {
  if (width < 1280 && width > 0) return true
  else return false
}
export const checkHeight = (height: number): boolean => {
  if (height < 1280 && height > 0) return true
  else return false
}
export const creatDir = () => {
  const dir: string = path.resolve(__dirname + '../../../Images/Resized/')
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

export const resizer = async (
  inputPath: string,
  width: number,
  height: number,
  outPath: string
) => {
  await sharp(path.resolve(__dirname + inputPath))
    .resize(width, height)
    .toFile(path.resolve(__dirname + outPath))
  return path.resolve(__dirname + outPath)
}
