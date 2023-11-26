import { error } from "console";
import { NextFunction, Request, Response } from "express";
import * as multer from "multer";

export default class FileUpload {
  private fieldName: string;

  constructor(fieldName: string) {
    this.fieldName = fieldName
  }

  private storage = multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, 'src/uploads/')
    },

    filename: (req, file, cb) => {
      const unixSuffix = Date.now();
      cb(null, file.fieldname + "-" + unixSuffix + ".png" );
    }
  })

  private uploadFile = multer({ storage: this.storage})

  public handleUpload(req: Request, res: Response, next: NextFunction) {
    this.uploadFile.single(this.fieldName) (req, res, (error: any) => {
      if(error) return res.status(400).json({ error })

      res.locals.filename = req.file.filename;
      next()
    })
  }
}