/*CMD
  command: /postdata
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let newRow = {
  'Country': 'Italy',
  'Age': '25',
  'Do you like Bots.Business?': 'YES'
}

let prms = {
  sheetName: "Users",  // sheet name
  row: newRow,
  onSuccess: "onSuccess",  // this command will be executed on Success
  onError: "onError"       // this command will be executed on Error
}

Libs.GoogleSpreadSheet.addRow(prms)
