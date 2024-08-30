import { CONFIGURATION_SHEET } from "./configuration";

function getConfigurationData() {

    const configurationSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIGURATION_SHEET.name);
  
    const configuration = {
  
      sendingNotifications: configurationSheet.getRange(CONFIGURATION_SHEET.sendNotificationsCol).getValue() as boolean,
      acceptingResponses: configurationSheet.getRange(CONFIGURATION_SHEET.acceptingResponsesCol).getValue() as boolean,
    }
  
    return configuration
  }
  
Logger.log(getConfigurationData())