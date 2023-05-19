let ModeSombre =false;
function changemodsom() {
    if(ModeSombre){
        //lightmode
        ModeSombre= false;
        document.documentElement.style.setProperty("--text-color","#121212");
        document.documentElement.style.setProperty("--background-color","#bbc7d4");
        document.getElementById("dark-light-mode").innerHTML="Mode Sombre";
    }
    else{
        ModeSombre= true;
        document.documentElement.style.setProperty("--text-color","white");
        document.documentElement.style.setProperty("--background-color","#121212");
        document.getElementById("dark-light-mode").innerHTML="Mode Clair";

    }
}
function copyToClipboard() {
    var textToCopy = "abdallappro@gmail.com";
    var tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }
