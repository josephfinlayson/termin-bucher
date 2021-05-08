import * as winston from 'winston'

require('dd-trace').init({
  logInjection: true
})

export class LoggerService {
    private logger: winston.Logger;

    constructor () {
      this.logger = winston.createLogger({
        transports: [
          new winston.transports.Console(),
        ],
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.json(),
          winston.format.metadata(),
          winston.format.errors({ stack: true })
        ),
      })
    }

    info (msg: string, metadata?: Record<string, any>) {
      this.logger.info(msg, metadata)
    }

    warn (msg: string, metadata?: Record<string, any>) {
      this.logger.warn(msg, metadata)
    }

    error (err: Error, metadata?: Record<string, any>) {
      this.logger.error(err)
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
