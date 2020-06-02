/*CMD
  command: onSuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// You can inspect options:
 Bot.sendMessage(inspect(options));

let rowIndex = options.rowIndex;
User.setProperty("rowIndex", rowIndex, "integer"); // You can set row index to options

Bot.sendMessage("Posted at row: " + rowIndex + 
    "\nInserted values: " + options.inserted+"\n\nhttps://docs.google.com/spreadsheets/d/1hUUcKjGN1AUv3jWoW1s5KLOhUL3twKMjgtZxxUm_9Bg/edit?usp=sharing");
