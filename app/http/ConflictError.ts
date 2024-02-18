import { HttpError } from './HttpError'

export class ConflictError extends HttpError {
  constructor(message: string, cause?: Record<string, any> | Error) {
    super(message, 409, 'Conflict', cause)
  }
}
