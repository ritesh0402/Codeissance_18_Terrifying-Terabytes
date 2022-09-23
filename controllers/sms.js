  function send_sms(req,res)
  {
    var sid = process.env.TWILIO_SID;
    var auth_token = process.env.TWILIO_AUTH;
  
    var twilio = require("twilio")(sid, auth_token);
    let cont = "+918369541524";
    twilio.messages
      .create({
        from:"+12677542147",
        to: `${cont}`,
        body: "Alert",
      })
      .then(function(res) {console.log("message has sent!")})
      .catch(function(err)  {
        console.log(err);
      });
    }
    
    module.exports=send_sms;