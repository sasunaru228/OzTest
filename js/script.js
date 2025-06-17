const input = document.getElementById("input");
const pie = document.querySelector('.progress__bar__status');
const switchAnimate = document.querySelector('#btnAnimated');
const switchToHide = document.querySelector('#btnHidden');
const progressBar = document.querySelector('#progress-bar');

switchAnimate.addEventListener('click', () => {
    switchAnimate.toggleAttribute('active');
    progressBar.classList.toggle('rotatingPB');
})
switchToHide.addEventListener('click', () => {
    switchToHide.toggleAttribute('active');
    progressBar.classList.toggle('hidden');
})

const RADIUS = 60;
const circumFerence = 2 * Math.PI * RADIUS;
pie.setAttribute("stroke-dasharray", circumFerence);
pie.setAttribute("stroke-dashoffset", circumFerence);

input.addEventListener("input", (e) => {
    const value = e.target.value;
    input.value = value.replace(/\D/g, '');
    if (value > 100) input.value = 100;
    const percent = Number(e.target.value);
    const offset = circumFerence * (1 - percent / 100);
    pie.setAttribute("stroke-dashoffset", offset);
});