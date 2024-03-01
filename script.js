function contactUs() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var massage = document.getElementById("massage").value;
    var displayInputDiv = document.getElementById("displayInput");
    displayInputDiv.innerHTML = `Successfully massage sent by  ${name} from ${email} `;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Massage:", massage);
}
