import { CONFIG } from "./configuration";
import { levelAnswers } from "./configuration";


function aoEnviarResposta(e) {
    // Acessa a planilha onde as respostas estão sendo gravadas
    var sheet = e.source.getActiveSheet();
    
    // Obtém o número da linha onde a resposta foi gravada
    var linha = e.range.getRow();
    
    // Supondo que a resposta chave está na segunda coluna (ajuste conforme necessário)
    var resposta = sheet.getRange(linha, CONFIG.answerCol).getValue();
    
    // Variável que define para qual aba (planilha) a resposta será movida
    var destino;
    
    // Condições baseadas na resposta para determinar a aba de destino
    if (resposta == levelAnswers.tecnico) {
      destino = "Técnico";
    } else if (resposta == levelAnswers.superior) {
      destino = "Superior";
    } else {
      destino = "Outros";  // Opcional: Para respostas que não se encaixam
    }
  
    // Copia a linha para a aba de destino
    var sheetDestino = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(destino);
    var ultimaLinhaDestino = sheetDestino.getLastRow() + 1;
    var linhaDados = sheet.getRange(linha, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    sheetDestino.appendRow(linhaDados);
  
    // (Opcional) Remove a linha original se não quiser manter as respostas na aba principal
    // sheet.deleteRow(linha);
  }
  
  function onOpen() {
    // Cria o gatilho para executar 'aoEnviarResposta' quando o formulário for enviado
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    ScriptApp.newTrigger('aoEnviarResposta')
             .forSpreadsheet(sheet)
             .onFormSubmit()
             .create();
  }
  