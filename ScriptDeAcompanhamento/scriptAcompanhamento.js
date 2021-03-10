
var SEL_STUDENT = "ulysses.uchoa@zup.com.br"; // nome do selecionado
//var SEND_MAIL = "danilo.lucena@zup.com.br, danilo.ribeiro@zup.com.br, giselle.cruz@zup.com.br, rafaella.vaccari@zup.com.br, cassio.almeida@zup.com.br" ;
var SEND_MAIL = "danilo.ribeiro@zup.com.br, rafaella.vaccari@zup.com.br" ;
//nome das pessoas que vão receber o email
//39
// id dos forms que ficam na url 
var FORM_ID = ['1CTpEsKnUpqXUqLHzsFIx4V7kGe5F6U56830U4YowfAY','1vYFCuQC3g2UVVFYqgw_EwG9O-fkzXBKF0Atho_WZaGo','1AcS9CUapi5lydtL0C4TUVpEGG8FG1ivHlw4GoX0CjD0', 
'1chMTqIb7oBIblNG_9yOl-UJlKuAXwalgVO_Pa-1XA9g',  '1jDQ48H36BdH6yxbby_EQw86PQMJ5qEjQYadUqYTolT8', '1ErK9c_ypqcKK3yvAqAovon2QGXugW7Q3XRPXr_lloEo',
'1wEMVUZ7J2UGEg4qu3UKQ8dFmZyuOgh9oPRUGDgIPfCs', '1Eeyl8ETNT6d-CyIls3_j4RUUfxgR0BfjXlle5JSsATY','1j6PkVsA5UIFiCjXJKLoClDQpJ_Wx_A2WtZaK8_Cv3Z4',
'1_1jHdFfdIbkpSx5u2QLVWqw-d_RhOmjJK_NWV9vQs5Q','1HW6M9uEi5PiHs05diRX4JbFPy8_GQ1lFs5zKEC6qjX0', '1bXre1-GoDPO_JkVhBG-vUklgAylFFENlJXnG2E2Shl8',
'1YJuBNCCMslHYUEFPWR6ML7Qreh2WJA5XTFVaF-QnA6E','1iXyJL05KMZIWmZBH6h8JoS8JFCsNs8lkrPefDyS73Mw', '12RtFTzEN2hkiNcGhrWlpnuQLjXTNieB9cy905DL496Y',
'1C47AqPbOOg3B4o-yuQ8ohvMkhKxWn0VQ42Ns8EUPWh4', 
'1qN7evkJ7O9wCQ9jVG_pVcZKK6DTIK_Rct8yuIiKrLZ8','12hYTD7s3v3m-EJ48vU-SLIWnZmZz7CiC_fkJKBHZZUY','1NQBlfRhnqNJ6AkAHRN6vOahM0pSBPLtQvsgGo-FBFqI', 
'1S4_Lq_bfoQCaQUVnNCKP293UXUN1tbM9K4ss7ovi0aA', '1kzEyvAH7FM9ZhjyBkgFrSFg-DthTBB6Lb9gKknSVJFc','1orS8BbgGGIt0RRtIpt_JJgiV3skiNsgQY12yzzCK6Ec',
 '1zUEhPionVaTl3CEP4KHkNPvWSv9BBBjeStPX30xtI3w','1en7UfL7Xo825JjnsZddKiO_pznd8l6mUahPXuUa2TqY', '1tRYrTK8xX4UiU7ly81jjG6iGvj7H1bC1KTeo4wx8yNs', 
 '1fjh0urQtvNTgaiQ0KjH18YYeDhibcTSLVsD-kZR30wY','14444HvSWdI4hffLrFc5f14d6AGUQSlu0ta-kfPQOpBg','1dCmojLZeL5BMbEtPjPYZIfPnf7GYmFTfPSGQtbjECnQ',
 '1yaBknXBxoQNJxepDnp84ucI0m9Qad9Bds1rR0jSsI18','1GPvq70QIXXV0iY8DaAxK_2w_FjnE4li7Xauuca6NJrQ','1mgwI6nh9T54uVl3L0yHHJc4f0Tc-xUtz7OxHPYznwVg',
 '1Z3hUQKBUubKiTiQTKwqGdwH9NwypA6fm_C5t9KWC_eY','1OL7t7sXJVhPq7BaeCdPmgH7-3TBfPTQRWp-JGGaZNpg','1bOKkKET9wsa2NhmtsmDZGjL2qJdX8FihMHTmm9XDR58',
 '1GW_3nrcfdfW-EHl3tI8k77Lv72XQQpbdbcc88xozcO4','191ZC0YUkxIJeBPBMccxNiNDXWQc3wekL3rkjTzmGzMk','1QCcJhhlM5txf8AsaCfEKEtyHmFth4WfwEHgEzz1ABKw',
 '1CJREJhwvhBdIs3TQCQqcd_AoOXqjrAYv_LO8jDbIQJE', '1tVuBohb0_ZyeVhIT53-x3cRmA9Md8Ul665t1ypzL8t8','1WL4lR5wgusTxzot0AawoVsXhNOOD1omKkTTyAVrXqIc',
 '1l7X82jx9Gm-iL8vdA-xDG5G6__0xEVssm369CFNnByk','1dsbrka9KK5IDDFZ3JDl8lxlqKQ9Y8dIf0Gem6UXRM7Q','1g-_fcCIj0q83-2umTy0GZbXQq7DsEn-ml26XwwIu_co' ];


 var arrayMensage= [ ];

//função para verificar se tem email nos forms dos respondentes.
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
     // Logger.log("Aluno respondeu: %s", formResponse.getRespondentEmail())
      Logger.log(" O seguinte curso: %s", form.getTitle());

      arrayMensage.push(form.getTitle() + " \n" );

           } 


          }  
         
  } 
  // envia email
    if(arrayMensage.length > 0){
            MailApp.sendEmail(SEND_MAIL,
             "Mensagem Automática: Acompanhamento de estudante :"+SEL_STUDENT,
             arrayMensage.toString() );
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