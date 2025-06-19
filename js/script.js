// const input = document.getElementById("input");
// const pie = document.querySelector('.progress__bar__status');

// const progressBar = document.querySelector('#progress-bar');

// const RADIUS = 60;
// const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
//
// pie.setAttribute("stroke-dasharray", CIRCUMFERENCE);
// pie.setAttribute("stroke-dashoffset", CIRCUMFERENCE);
//
// input.addEventListener("input", (e) => {
//     let value = e.target.value;
//     value = value.replace(/\D/g, '');
//     if (value > 100) value = '100'
//     if (value.startsWith('0') && value.length > 1) {
//         value = value.substring(1, 2);
//     }
//     const percent = Number(value);
//     const offset = CIRCUMFERENCE * (1 - percent / 100);
//     pie.setAttribute("stroke-dashoffset", offset);
//     e.target.value = value
// });

