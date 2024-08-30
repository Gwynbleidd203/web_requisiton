// General Configuration
const CONFIG = {
  formID: "1751CVRsRK2-aqzkxdukEub82FQTKKQUlQ5iB_Ivvhnc", // ID of the form

  answerCol: 11, // Column that receives the answer about the scholar level of each requisition
  techCourseCol: 14, // Techinical Course Column
  supCourseCol: 12, // Superiror Course Column

  requestQuestionID: 4,

  startOptionDay: '2024-08-02',
  endOptionDay: '2024-09-10'
  
}

const IMPORTANT_DATES = {

    
}

// Mapping for the configuration sheet
const CONFIGURATION_SHEET = {
  name: "Configurações",
  acceptingResponsesCol: "A2",
  sendNotificationsCol: "B2"
}

// Current string for each level of school 
const levelAnswers = {
  superior: "Curso Superior (Graduações ou Pós-Graduações)",
  tecnico: "Curso Técnico (Técnicos Integrados e Subsequentes)"
}

// Emails that receive the requests
const EMAILS = {

  tech: [
    "secretaria.tecnico@muz.ifsuldeminas.edu.br"
  ],
  superior: [
    "secretaria.superior@muz.ifsuldeminas.edu.br"
  ]
}

// Configuration for the email sender function
const EMAIL_CONFIG = {

  scholarLevelCol: 11,
  scholarEmail: 5,
  nameCol: 6,
  solicitationCol: 15,
  techSheet: "Técnico",
  superiorSheet: "Superior",
  cpfCol: 8,
  raCol: 9,
}

export {
  CONFIG,
  CONFIGURATION_SHEET,
  levelAnswers,
  EMAILS,
  EMAIL_CONFIG,
}