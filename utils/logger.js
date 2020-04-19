const { createLogger, format, transports, config } = require('winston');
const { combine, timestamp, json } = format;
require('winston-mongodb');

const assetLogger = createLogger({
  level: 'info',
  levels: config.syslog.levels,
  defaultMeta: {
    service: 'asset-service'
  },
  format: combine(
    timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }),
    json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' }),
    new transports.MongoDB({
      level: 'error',
      db: process.env.MONGO_URI,
      collection: 'logs'
    })
  ],
  exceptionHandlers: [
    new transports.Console(),
    new transports.File({ filename: 'unhandled-combined.log'}),
    new transports.MongoDB({
      level: 'error',
      db: process.env.MONGO_URI,
      collection: 'logs'
    })
  ]
});


const reservationLogger = createLogger({
  level: 'info',
  levels: config.syslog.levels,
  defaultMeta: {
    service: 'reservation-service'
  },
  format: combine(
    timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }),
    json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' }),
    new transports.MongoDB({
      level: 'error',
      db: process.env.MONGO_URI,
      collection: 'logs'
    })
  ],
  exceptionHandlers: [
    new transports.Console(),
    new transports.File({ filename: 'unhandled-combined.log'}),
    new transports.MongoDB({
      level: 'error',
      db: process.env.MONGO_URI,
      collection: 'logs'
    })
  ]
});

module.exports = {
  assetLogger: assetLogger,
  reservationLogger: reservationLogger
}