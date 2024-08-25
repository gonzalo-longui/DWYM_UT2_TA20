const imagen = document.getElementById("imagenOriginal");

const srcOriginal = imagen.src;

imagen.addEventListener('mouseover', () => {
  imagen.src = 'https://media.tenor.com/lQxToHbuUNwAAAAM/rick-roll.gif';
});

imagen.addEventListener('mouseout', () => {
  imagen.src = srcOriginal;
})