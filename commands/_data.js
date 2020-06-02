/*CMD
  command: /data
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
  'Age': '25'
}

let prms = {
  sheetName: "Sheet1",  // sheet name
  row: newRow,
  onSuccess: "onSuccess",  // this command will be executed on Success
  onError: "onError"       // this command will be executed on Error
}

Libs.GoogleSpreadSheet.addRow(prms)
