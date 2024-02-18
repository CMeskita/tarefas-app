import { HttpError } from './HttpError'

export class TooManyRequestsError extends HttpError {
  constructor(message: string, cause?: Record<string, any> | Error) {
    super(message, 429, 'Too Many Request', cause)
  }
}
