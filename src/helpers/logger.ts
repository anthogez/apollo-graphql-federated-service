import * as pino from "pino";
const logger = pino({
  prettyPrint: {
    colorize: true, // --colorize
    translateTime: true, // --translateTime
    ignore: "pid,hostname" // --ignore
  }
});
export default logger;
