const show = document.querySelectorAll(".history__show");
console.log(show);
function handleClick(e) {
    console.log(e.currentTarget);
    const sibling = e.currentTarget.nextElementSibling;
    if (sibling.style.display === "block") {
        sibling.style.display = "none";
    }
    else {
        sibling.style.display = "block";
    }
    console.log(sibling);
}
show.forEach(x => x.addEventListener("click", handleClick));