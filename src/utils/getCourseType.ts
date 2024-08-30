const getCourseType = (event: GoogleAppsScript.Spreadsheet.) => {

    var sheet = event.source.getActiveSheet();
    
    // Obtém o número da linha onde a resposta foi gravada
    var linha = event.range.getRow();
    
    // Supondo que a resposta chave está na segunda coluna (ajuste conforme necessário)
    var resposta = sheet.getRange(linha, CONFIG.answerCol).getValue();
}