/*CMD
  command: /telegram
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Send Your Telegram Username :*

`Without @`
  ANSWER
  keyboard: 
  aliases: 
CMD*/

User.setProperty("telegram","https://t.me/"+message,"text")
Bot.runCommand("/email")
