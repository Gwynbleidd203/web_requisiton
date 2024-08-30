if (getConfigurationData().sendingNotifications == true) {

  function getPersonalData(line, emailTarget, sheet) {

    const targetCourseCol = emailTarget === "superior" ? 12 : 14

    const personalData = {

      name: sheet.getRange(line, EMAIL_CONFIG.nameCol).getValue(),
      solicitation: sheet.getRange(line, EMAIL_CONFIG.solicitationCol).getValue(),
      scholarEmail: sheet.getRange(line, EMAIL_CONFIG.scholarEmail).getValue(),
      cpf: sheet.getRange(line, EMAIL_CONFIG.cpfCol).getValue(),
      ra: sheet.getRange(line, EMAIL_CONFIG.raCol).getValue(),

      course: sheet.getRange(line, targetCourseCol).getValue()
    }

    return personalData
  }

  function sendEmails(e) {

    

      const sheet = e.source.getActiveSheet();

      const lastRow = sheet.getLastRow();

      const line = e.range.getRow();

      const answer = sheet.getRange(line, EMAIL_CONFIG.scholarLevelCol).getValue();

      // Define se o aluno é 
      const emailTarget = answer === levelAnswers.superior ? "superior" : "tech"

      // Chama a funcao de coleta de dados
      const personalData = getPersonalData(line, emailTarget, sheet)

      MailApp.sendEmail(
        {
          to: EMAILS[emailTarget][0],
          subject: `Requisição de ${personalData.solicitation} do Aluno(a) ${personalData.name}`,
          body: `O Aluno(a) ${personalData.name}, requisita ${personalData.solicitation}\n
          Segue seus dados:
          Nome Completo: ${personalData.name}\n
          CPF: ${personalData.cpf}\n
          RA: ${personalData.ra}\n
          Curso: ${personalData.course}\n
          Email: ${personalData.scholarEmail}\n
          https://suap.ifsuldeminas.edu.br/edu/${personalData.ra}/`
        }
      )
  }
}