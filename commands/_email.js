/*CMD
  command: /email
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send Your Email ID :*
  keyboard: 
  aliases: 
CMD*/

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
if(validateEmail(message)){
User.setProperty("email",message,"text")
Bot.sendMessage("Email Registered !");
Bot.runCommand("/fb")
}else{
Bot.sendMessage("Wrong Email")
Bot.runCommand("/email")
}
