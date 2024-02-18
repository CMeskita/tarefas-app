export class HttpError extends Error {
  constructor(
    public message: string,
    public statusCode: 400 | 401 | 404 | 409 | 429 | 500,
    public statusMessage: string,
    public cause?: Record<string, any> | Error,
  ) {
    super(message, cause)
  }
}
