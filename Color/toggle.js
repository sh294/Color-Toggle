function myFunction() {
    var x = document.getElementById("side-nav");
    if (x.style .display === "block") {
        x.style .display = "none";
    } else {
        x.style .display = "block";
    }

}
let main = document.querySelector("main");


document.querySelector("#grey").addEventListener("click", function ()
{
    main .style.backgroundColor = ("Gray")
});

document.querySelector("#red").addEventListener("click", function ()
{
    main .style.backgroundColor = ("Red")
});


document.querySelector("#green").addEventListener("click", function ()
{
    main .style.backgroundColor = ("Green")
});


document.querySelector("#orange").addEventListener("click", function ()
{
    main .style.backgroundColor = ("Orange")
});


document.querySelector("#purple").addEventListener("click", function ()
{
    main .style.backgroundColor = ("Purple")
});