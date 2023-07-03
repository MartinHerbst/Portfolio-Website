window.addEventListener("scroll", function(){
    var icondismiss = document.querySelector("#icon");
    icondismiss.classList.toggle("dismiss", window.scrollY > 10)
    var navigation = document.querySelector("#navigation");
    navigation.classList.toggle("sticky", window.scrollY > 1)
});
