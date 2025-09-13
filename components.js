$().ready(() => {
    fetch('nav.html')
        .then(response => response.text())
        .then((data) => {
            $(".nav").replaceWith(data);
        });
});
console.log(window.location.pathname);


switch (window.location.pathname) {
    case "/code-folio/":
    case "/code-folio/index.html":
        console.log("here");
        $("#home").addClass('active').attr("aria-current", "page");
        break
    case "/code-folio/about.html":
        $("#about").addClass('active').attr("aria-current", "page");

        break;
    case "/code-folio/projects.html":
        $("#projects").addClass('active').attr("aria-current", "page");

        break;
    case "/code-folio/accomplishments.html":
        $("#accomplishments").addClass('active').attr("aria-current", "page");

        break;
    case "/code-folio/resume.html":
        $("#resume").addClass('active').attr("aria-current", "page");

        break;
    case "/code-folio/contact.html":

        break;
    default:
        break;
}