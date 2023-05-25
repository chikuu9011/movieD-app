import record from "../env";
 
 class Crudservices {
   async insertdata(routername,data){
      // console.log(data);
      console.log(routername);
      var finalpath = record.serverPath+routername
      console.log(finalpath);
    
   }
   selectdata(){}
   deletedata(){}
   updatedata(){}
  }
  var crudObj = new Crudservices()
  export default crudObj;
