var homeButtonClicked = () => {
    window.location.href = "https://thelynx.xyz/";
}
var projectsButtonClicked = () => {
    window.location.href = "https://thelynx.xyz/projects";
}
var softwareButtonClicked = () => {
    window.location.href = "https://thelynx.xyz/software";
}
var filesButtonClicked = () => {
    window.location.href = "https://thelynx.xyz/files";
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}