import { HttpError } from './HttpError'

export class InternalServerError extends HttpError {
  constructor(message: string, cause?: Record<string, any> | Error) {
    super(message, 500, 'Internal Server Error', cause)
  }
}
