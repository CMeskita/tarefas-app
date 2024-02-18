import { HttpError } from './HttpError'

export class UnauthorizedError extends HttpError {
  constructor(message: string, cause?: Record<string, any> | Error) {
    super(message, 401, 'Unauthorized', cause)
  }
}
