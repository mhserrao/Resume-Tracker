window.addEventListener("DOMContentLoaded", () => {
    var startButton = document.getElementById("start");
    var jatElement = document.getElementById("jat");
    var submit = document.getElementById("submit");

    startButton.addEventListener("click", ()=> {
        jat.style.display = "block";
        submit.style.display = "initial";
    });
 
    //add job tracker
    var addJAT = document.getElementById("addJ");
    var jat = document.getElementById("jat");
    var plus = 1;
    var p = 0 + plus;
    var otherPlus = 1;
    var jatArray = [];

    addJAT.addEventListener("click", () => {
            var jatClone = jat.cloneNode(true);
            jatClone.id = "jat" + ++p;
            jatClone.getElementsByClassName("track")[0].id = "track" + (p+plus++);
            jatClone.getElementsByClassName("track")[1].id = "track" + (p+plus++);
            jatClone.getElementsByClassName("track")[2].id = "track" + (p+plus++);
            jatClone.getElementsByClassName("track")[3].id = "track" + (p+plus++);
            jatClone.getElementsByClassName("track")[4].id = "track" + (p+plus++);
            jatClone.getElementsByClassName("addButton")[0].style.display = "none";
            jatClone.getElementsByClassName("remButton")[0].style.display = "none";
            console.log(jatClone)
            cleanUpInputs(jatClone);
            jat.parentNode.insertBefore(jatClone, submit);
            jatArray.push(jatClone);
            console.log(jatArray);
   });

   //removing user inputs after cloning
     function cleanUpInputs(jat) {
         for (var i = 0; n = jat.childNodes[i]; ++i) {
               if (n.childNodes && n.tagName != 'INPUT') {
                   cleanUpInputs(n);
               } else if (n.tagName == 'INPUT' && n.type == 'text') {
                   n.value = '';
               } else if (n.tagName == 'INPUT' && n.type == 'checkbox'){
                   n.checked = false;
               }
           }
       }

       //removing a jat
       var remJAT = document.getElementById("remJ");
       var numOfClicks = 0;

       remJAT.addEventListener("click", () =>{
           numOfClicks++;
           if(numOfClicks<=jatArray.length){
            jatArray[jatArray.length-numOfClicks].style.display = "none";
           }
       });

       //error-checking and SUBMIT
       //error-checking
       var resVer = document.getElementById("resVer");
       var cvVer = document.getElementById("cvVer");

       submit.addEventListener("click", e => {
           localStorage.myPosition = JSON.stringify(position.value);
           localStorage.myCompany = JSON.stringify(company.value);
           localStorage.myResVer = JSON.stringify(resVer.value);
           localStorage.myCVVer = JSON.stringify(cvVer.value);
           //check position and company fields for characters
           if (!position.value.match(/[a-z]+/i)) {
               alert("Please enter a position!");
               e.preventDefault();
           }
           if (!company.value.match(/[a-z]+/i)) {
               alert("Please enter a company!");
               e.preventDefault();
           }

           // check resume and cover letter fields for extension
           if (!resVer.value.match(/.pdf$/i) && (!resVer.value.match(/.docs$/i)) && (!resVer.value.match(/.txt$/i))){
               alert("Please enter a pdf, doc or txt");
               e.preventDefault();
           } else if(!cvVer.value.match(/.pdf$/i) && (!cvVer.value.match(/.docs$/i)) && (!cvVer.value.match(/.txt$/i))){
               alert("Please enter a pdf, doc or txt");
               e.preventDefault();
           }
       });

       //Storage

       // get assets
       var position = document.getElementById("position");
       var company = document.getElementById("company");

       var myPosition;
       var myCompany;
       var myResVer;
       var myCVVer;

       //Storage of Position
       function startPosition(){
           position.value = myPosition;
           if(localStorage && localStorage.myPosition){
               position.value = JSON.parse(localStorage.myPosition);
           } else {
               myPosition = "";
               position.value = JSON.parse(myPosition);
           }
       }

       startPosition();

       // Storage of Company
       function startCompany(){
           company.value = myCompany;
           if(localStorage && localStorage.myCompany){
               company.value = JSON.parse(localStorage.myCompany);
           } else {
               myCompany = "";
               company.value = JSON.parse(myCompany);
           }
       }

       startCompany();

       //storage of resVer
       function startResVer(){
           resVer.value = myResVer;
           if(localStorage && localStorage.myResVer){
               resVer.value = JSON.parse(localStorage.myResVer);
           } else {
               myResVer = "";
               resVer.value = JSON.parse(myResVer);
           }
       }

       startResVer();

       //storage of CV version
       function startCVVer(){
           cvVer.value = myCVVer;
           if(localStorage && localStorage.myCVVer){
               cvVer.value = JSON.parse(localStorage.myCVVer);
           } else {
               myCVVer = "";
               cvVer.value = JSON.parse(myCVVer);
           }
       }

       startCVVer();


});
