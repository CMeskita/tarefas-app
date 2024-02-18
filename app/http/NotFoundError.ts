import { HttpError } from './HttpError'

export class NotFoundError extends HttpError {
  constructor(message: string, cause?: Record<string, any> | Error) {
    super(message, 401, 'Not Found', cause)
  }
}
