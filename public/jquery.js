 $("div[id^='id-']").click(function(){
  var text = $(this).text();
  copyToClipboard(text);
});

function copyToClipboard(text) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();
}
