/*CMD
  command: /fb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send The Link to your FaceBook Profile :*
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Facebook",message,"text")
Bot.runCommand("/twitter")
