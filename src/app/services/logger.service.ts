import pino from 'pino'

export class LoggerService {
    private logger: any;

    constructor () {
      this.logger = pino({
        prettyPrint: process.env.NODE_ENV !== 'production',
        formatters: {
          level (level) {
            return { level }
          },
        },
      })
    }

    info (msg: string) {
      this.logger.info(msg)
    }

    warn (msg: string) {
      this.logger.warn(msg)
    }

    error (msg: Error) {
      this.logger.error(msg)
    }
}

// Standard error extender from @mhio/exception

class ExtendedError extends Error {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = (new Error(message)).stack
    }
  }
}

export class RethrownError extends ExtendedError {
    original: any
    new_stack: any
    stack: any
    constructor (message, error) {
      super(message)
      if (!error) throw new Error('RethrownError requires a message and error')
      this.original = error
      this.new_stack = this.stack
      const message_lines = (this.message.match(/\n/g) || []).length + 1
      this.stack = this.stack.split('\n').slice(0, message_lines + 1).join('\n') + '\n' +
            error.stack
    }
}

export const loggerInstance = new LoggerService()
