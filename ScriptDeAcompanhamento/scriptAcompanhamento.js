//var FORM_ID = '1UsmbeqAyXFf1uXpCTQvistEUX6phOTo7lDhwwz7i4ls';
var SEL_STUDENT = "luiz.barbosa@zup.com.br";
var SEND_MAIL = "danilo.lucena@zup.com.br, danilo.ribeiro@zup.com.br, alberto.tavares@zup.com.br";
var FORM_ID = ['1CTpEsKnUpqXUqLHzsFIx4V7kGe5F6U56830U4YowfAY','1vYFCuQC3g2UVVFYqgw_EwG9O-fkzXBKF0Atho_WZaGo','1AcS9CUapi5lydtL0C4TUVpEGG8FG1ivHlw4GoX0CjD0'];
var arrayMensage= [ ];

function monitorRespostas() {

  // Open a form by ID and log the responses to each question.
  // exemplo de: https://developers.google.com/apps-script/reference/forms/form-response
  // form exemplo: https://docs.google.com/forms/d/1UsmbeqAyXFf1uXpCTQvistEUX6phOTo7lDhwwz7i4ls/edit 

  for (var j =0; j<FORM_ID.length; j++){

  var form = FormApp.openById(FORM_ID[j]);
  var formResponses = form.getResponses();

  for (var i = 0; i < formResponses.length; i++) {
    var formResponse = formResponses[i];


    // aluno respondeu
    if (SEL_STUDENT == formResponse.getRespondentEmail()){
      Logger.log("Aluno respondeu: %s", formResponse.getRespondentEmail())

      arrayMensage.push("O estudante já respondeu o curso :"+form.getTitle() );

      // envia email
          } 
             
          // remove os triggers para evitar múltiplos e-mails
          //cancelTriggers();
  

          }  
          if(arrayMensage.length > 0){
            MailApp.sendEmail(SEND_MAIL,
             "Acompanhamento de estudante :"+SEL_STUDENT,
             arrayMensage.toString() );
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