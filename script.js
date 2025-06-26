function menuBar() {
    let m = document.getElementById("nsvi");
    if (m.style.visibility === "hidden") {
        m.style.visibility = "visible";
    } else {
        m.style.visibility = "hidden";
    }
}

var read = [];
var ot = document.getElementById("ot");
var a = document.getElementById("woo");
var b = document.getElementById("wooo");
var c = document.getElementById("ht");
var d = document.getElementById("no");
var e = document.getElementById("nt");
var area;

function getArea() {
    // Convert string inputs to numbers
    let width = (parseFloat(a.value) * parseFloat(d.value)) + 
                (parseFloat(b.value) * parseFloat(e.value));
    let height = parseFloat(c.value) * 3;

    area = ((width * 0.00328084) * (height * 0.00328084)).toFixed() + 
           ' FT<sup>2</sup>';
    ot.innerHTML = area;
    
}

function getread() {
    let a = parseFloat(document.getElementById("tr").value);
    let b = parseFloat(document.getElementById("tl").value);
    let c = parseFloat(document.getElementById("mc").value);
    let de = parseFloat(document.getElementById("br").value);
    let ef = parseFloat(document.getElementById("bl").value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(de) || isNaN(ef)) {
        alert("Please enter valid numbers for all readings.");
        return;
    }

    let total = (a + b + c + de + ef);
    read.push(total);

    // Check if total readings match expected count
    if ((parseInt(d.value) + parseInt(e.value)) * 3 === read.length) {
        document.getElementById("bttn").disabled = true;
        document.getElementById("btttn").disabled = false;
    }
    document.getElementById("tr").value=""
    document.getElementById("tl").value=""
    document.getElementById("mc").value=""
    document.getElementById("br").value=""
   document.getElementById("bl").value=""

}
function goutput(){
let cfm=0;
    for(let i = 0 ; i<=read.length-1;i++){
        cfm+=read[i];
    }
    a=(Math.round(cfm)/read.length)*area
 document.getElementById("camp").innerHTML=document.getElementById("campus").value
 document.getElementById("floor").innerHTML= document.getElementById("floors").value
 document.getElementById("wing").innerHTML=document.getElementById("wings").value
 document.getElementById("cfmot").innerHTML=a
 document.getElementById("trot").innerHTML=a/400
}

