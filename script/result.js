function names() {
    var x = document.getElementById("name-1").value;
    var y = document.getElementById("name-2").value;
    if (x == "" || y == "") {
        window.alert("Enter the names");
    }

    else {
        var result = Math.random();
        var final = Math.floor(result *= 100);
        document.getElementById("remarks").style.padding = "4% 15%";
        document.getElementById("Dr").style.display = "block";
        if (final <= 30) {
            document.getElementById("remarks").innerHTML = "The chance of a Relationship working out between " + x + " and " + y + " is not very big, but a relationship is very well possible, if the two of you really want it to, and are prepared to make some sacrifices for it. You'll have to spend a lot of quality time together. You must be aware of the fact that this relationship might not work out at all, no matter how much time you invest in it.";
        }
        else if (final > 30 && final <= 50) {
            document.getElementById("remarks").innerHTML = "The chances of a Relationship working out between  " + x + " and " + y + " are moderate, but a relatinship is very well possible, if the two of you are really into it, and are ready to dive into it. You'll have to invest some time and prioritze each other and spend some quality time together, and You must stay aware of the fact that the things can go south if one of you are not interested in it.";
        }
        else if (final > 50 && final < 100) {
            document.getElementById("remarks").innerHTML = "The chances of a Relationship working out between  " + x + " and " + y + " are really strong,and a relatinship is very well possible, the two of you are really into it, and are ready to dive into it. You'll have to invest some time and prioritze each other and spend some quality time together, and You must stay aware of the fact that the things can go south if one of you are not interested in it.";
        }
        document.getElementById("percentage").innerHTML = final;
    }
}