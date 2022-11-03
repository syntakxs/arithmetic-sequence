function ryanwagkangsusuko() {

  var an = parseFloat(document.getElementById("an").value);
  var a1 = parseFloat(document.getElementById("a1").value);
  var n = parseFloat(document.getElementById("n").value);
  var d = parseFloat(document.getElementById("d").value);


  //if the given is complete
  if (a1 && n && d ) {
    //alert("kumpleto ang mga gago");
    var arithmetic = a1 + (n-1) * d;
    alert(arithmetic);
  }
  else if (isNaN(an,a1,n,d)) {
    alert("baka gusto mo maglagay");
  }
  //if the given dont have a1
  else if (isNaN(a1,d)) {
    var inputotherterm = prompt("If the given has no a1, then enter the other term. ex: if a5 then enter 5");
    if (inputotherterm === null) {
      return; //break out of the function early
    }
    var valueofotherterm = prompt("Please enter the value of a" + inputotherterm);
    if (valueofotherterm === null) {
      return; //break out of the function early
    }
    var sanaolhinahanap = valueofotherterm - n;
    var sanaolhinahanap1 = inputotherterm - an;
    var sanaolhinahanap2 = sanaolhinahanap / sanaolhinahanap1;
    alert("D = " + sanaolhinahanap2);
   
    var sanaolhinahanap3 = an-1;
    var sanaolhinahanap4 = sanaolhinahanap3 * sanaolhinahanap2; 
    var sanaolhinahanap5 = n-sanaolhinahanap4;
    alert("a1 = " + sanaolhinahanap5);
  }
  //if the given dont have nth term.
  else if (isNaN(n)) {
    //alert("walang n word");
    var hinahanapsin = a1-d;
    var hinahanapsin1 = an - hinahanapsin;
    var hinahanapsin2 = hinahanapsin1 / d;
    alert("N = " + hinahanapsin2);
  }
  else if (isNaN(d)) {
    var hinahanapsid = an-a1;
    var hinahanapsid1 = n-1;
    var hinahanapsid2 = hinahanapsid / hinahanapsid1;
    alert("D = " + hinahanapsid2);
  }
  else{
   alert(":>")
  }
}

//<!-- CREATED BY RYAN :> -->