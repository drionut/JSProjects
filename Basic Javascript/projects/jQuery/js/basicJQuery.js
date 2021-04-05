$(document).ready(function () {
    setTimeout(changeId, 2000);
});

function changeId() {
    $("#loading").attr("id", "loaded").text("Page Ready to Use");
}
