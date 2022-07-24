const moment = require("moment")
const dater = (d) =>{
  if(!moment.isDate(d)){
    return "Not a date"
  }
       
 return moment(d).format("DD-MM-YYYY HH:MMa")
   }
module.exports = dater