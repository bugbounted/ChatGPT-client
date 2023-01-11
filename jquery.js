$(function () {
    $(".chat_container").hide();
    $(".message").click(function () {
        var copiedtext = $(this).closest("wrapper ai").closest("chat").find(".message").text();
        if (navigator.clipboard) {
            navigator.clipboard.writeText(copiedtext)
                .then(() => {
                    $(".chat_container").text("Copied!").show().fadeOut(1200);
                })
                .catch((error) => {
                    $(".chat_container").text("Not copied!").show().fadeOut(1200);
                });
        } else {
            $(".chat_container").text("Not copied!").show().fadeOut(1200);
        }

    });
});
