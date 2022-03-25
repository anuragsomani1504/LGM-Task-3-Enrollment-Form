function displayData() {

    document.getElementById("displayContainer").style.display = "flex";
    console.log(document.getElementById("displayContainer").style.display);
    document.getElementById("namedisplay").innerHTML = document.getElementById("name").value;
    document.getElementById("emaildisplay").innerHTML = document.getElementById("email").value;
    document.getElementById("linkedindisplay").href = document.getElementById("profile").value;

    document.getElementById("image").src = document.getElementById("url").value;

    document.getElementById("genderdisplay").innerHTML = document.getElementById("gender").value;
    var skills = document.getElementsByClassName("checkbox");
    var skillstring = "";
    for (let i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            skillstring += (skills[i].name) + ", ";
        }

    }
    document.getElementById("skillsdisplay").innerHTML = skillstring.slice(0, skillstring.length - 2);
    skillstring = "";

    document.getElementById("inputform").reset();
}