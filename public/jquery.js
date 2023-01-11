$(function () {
    $(".chat_container").hide();
    $(".text-copy").click(function () {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(this).closest("app").find("chat_container").find(".wrapper ai").find(".chat").find(".message").text()).select();
        document.execCommand('copy');
        $(".chat_container").text("Copied!").show().fadeOut(1200);
        $temp.remove();
    });
});
