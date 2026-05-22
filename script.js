const form = document.querySelector("#sign-up");
const para = document.querySelectorAll("#op");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const fname = document.querySelectorAll("#fname").value;
    const lname = document.querySelectorAll("#lname").value;
    const phn = document.querySelectorAll("#pno").value;
    const eid = document.querySelectorAll("#Eid").value;

    para.innerHTML = `
        First Name: ${fname}<br>
        Last Name: ${lname}<br>
        Phone Number: ${phn}<br>
        Email ID: ${eid}
    `;
});