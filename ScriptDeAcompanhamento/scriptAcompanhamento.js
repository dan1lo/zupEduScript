//var FORM_ID = '1UsmbeqAyXFf1uXpCTQvistEUX6phOTo7lDhwwz7i4ls';
var SEL_STUDENT = "luiz.barbosa@zup.com.br";
var SEND_MAIL = "danilo.lucena@zup.com.br, danilo.ribeiro@zup.com.br";
var FORM_ID = ['1chMTqIb7oBIblNG_9yOl-UJlKuAXwalgVO_Pa-1XA9','1CTpEsKnUpqXUqLHzsFIx4V7kGe5F6U56830U4YowfAY','1wEMVUZ7J2UGEg4qu3UKQ8dFmZyuOgh9oPRUGDgIPfCs'];


function monitorRespostas() {

  // Open a form by ID and log the responses to each question.
  // exemplo de: https://developers.google.com/apps-script/reference/forms/form-response
  // form exemplo: https://docs.google.com/forms/d/1UsmbeqAyXFf1uXpCTQvistEUX6phOTo7lDhwwz7i4ls/edit 

  for (var j =0; i<FORM_ID.length; j++){

  var form = FormApp.openById(FORM_ID[j]);
  var formResponses = form.getResponses();

  for (var i = 0; i < formResponses.length; i++) {
    var formResponse = formResponses[i];

    // aluno respondeu
    if (SEL_STUDENT == formResponse.getRespondentEmail()){
      Logger.log("Aluno respondeu: %s", formResponse.getRespondentEmail())

      // envia email
      MailApp.sendEmail(SEND_MAIL,
        "[TESTE SCRIPT] Estudante da semana respondeu",
        "Aviso que o estudante respondeu aqui");

      // remove os triggers para evitar múltiplos e-mails
      //cancelTriggers();
    } 
  }  
 }
}  

function cancelTriggers(){
  //Logger.log('Current project has ' + ScriptApp.getProjectTriggers().length + ' triggers.');
  var projectTriggers = ScriptApp.getProjectTriggers();

  for (var i = 0; i < projectTriggers.length; i++) {
      var trigger =  projectTriggers[i];
      ScriptApp.deleteTrigger(trigger);
  } 
}