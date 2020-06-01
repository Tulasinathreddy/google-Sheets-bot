/*CMD
  command: /twitter
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send your Twitter Profile Link :*
  keyboard: 
  aliases: 
CMD*/

User.setProperty("twitter",message,"text")
Bot.runCommand("/postdata")
