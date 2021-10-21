let count = 0;
function myFunction(x) {
    count++;
    x.classList.toggle("change");
    if (count % 2 != 0) {
        document.querySelector('.LeftPage').style.display = "flex";
        document.querySelector('.LeftPage').style.width = "100%";
        document.querySelector('.CenterItems').style.display = "none";
    }
    else {
        document.querySelector('.LeftPage').style.display = "none";
        document.querySelector('.CenterItems').style.display = "flex";

    }

}



