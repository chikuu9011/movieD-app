import record from "../env";

class Crudenewservice {
  async insertData(props, data) {
    var finalapi1 = record.phpPath + props;
    console.log(finalapi1);

    try {
      var wd = await fetch(finalapi1, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      var as = await wd.json();
      return as;
    } catch (err) {
      console.log(err);
    }
  }
  async selectData(props) {
    var finalapi = record.phpPath + props;
    try {
      var res = await fetch(finalapi);
      var anser = await res.json();
      return anser;
    } catch (err) {
      console.log(err);
    }
  }
  async deleteData(props) {
    var deleteapi = record.phpPath + props;
    console.log(deleteapi);
    try {
      const tt = await fetch(deleteapi,{method:"delete"});
      const at = await tt.json();
      return at;
    } catch (error) {
      console.log(error);
    }
  }
}
var crudeservice = new Crudenewservice();
export default crudeservice;
