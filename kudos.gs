// replace this with your own Slack webhook URL
var webhookUrl = '[YOUR SLACK WEBHOOK URL HERE]';

// your form should look like this: https://docs.google.com/forms/d/e/1FAIpQLSf8hSUYyOGfZZ-pfswVFuNO0CmCYC5MpR5yd-0glU_nlNVecw/viewform
function onSubmit(e) {
  var response = e.response.getItemResponses();
  var d = "Kudos, " + response[0].getResponse() + "! " + response[1].getResponse() + " <@" + response[2].getResponse() + ">";
  var usersubmission = response[2].getResponse()
  
  var user = {
    "user": '{"text": "' + usersubmission + '"}'
  }
  
  var payload = {
    "payload": '{"text": "' + d + '"}'
  }

  var options = {
    "method": "post",
    "payload": payload,
  };

  UrlFetchApp.fetch(webhookUrl, options);
};
