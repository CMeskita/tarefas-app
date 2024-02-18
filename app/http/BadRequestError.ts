import { HttpError } from './HttpError'

export class BadRequestError extends HttpError {
  constructor(message: string, cause?: Record<string, any> | Error) {
    super(message, 400, 'Bad Request', cause)
  }
}
