const winston = require('winston');
const {
    createLogger,
    transports,
    format
} = require('winston');
 //require('winston-mongodb');
 require('express-async-errors');

const logger = winston.createLogger({
    transports:[
        new transports.File({
            filename:'logfile.log',
            level : 'info',
            format: format.combine(format.timestamp(),format.json(), format.metadata({services:'app/use'})  )
        }),
        // new transports.MongoDB({
        //     level:'error',
        //     db: "mongodb://localhost:27017/vidly",
        //     options: {useNewUrlParser: true, useUnifiedTopology: true},
        //      collection:'log',
        //      format: format.combine(format.timestamp(),format.json() )
        // })
    ],
    
        
})

    
// // throw new Error("Something Faild during startup"); 
// // process.on('uncaughtException',(ex)=>{
// //     logger.error(ex.message,ex);
// //     process.exit(1);
// // })
  winston.exceptions.handle(
      new winston.transports.Console({ colorize:true , prettyPrint:true }),
      new winston.transports.File({filename:'uncaughtException.log'})
  )

process.on('unhandledRejection',(ex)=>{
   
   throw ex;

})


// // const p = Promise.reject(new Error("some thing failed###########3"))
// // .then(()=>{console.log("done")});




module.exports = logger;