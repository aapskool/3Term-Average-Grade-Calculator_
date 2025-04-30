function calculateAverage() {
    const t1fa = parseFloat(document.getElementById("t1fa").value);
    const t1sa = parseFloat(document.getElementById("t1sa").value);
    const t2fa = parseFloat(document.getElementById("t2fa").value);
    const t2sa = parseFloat(document.getElementById("t2sa").value);
    const t3fa = parseFloat(document.getElementById("t3fa").value);
    const t3sa = parseFloat(document.getElementById("t3sa").value);
    startAutoScrollRight();
   

    if (isNaN(t1fa) || isNaN(t1sa) || isNaN(t2fa)|| isNaN(t2sa) || isNaN(t3fa) || isNaN(t3sa)) {
      document.getElementById("output").innerText = "Please enter all three term marks.";
      alert("மூன்று பருவ மதிபெண்களையும் பதிவிடவும்.");
      return;
    }

     if ((t1fa)>40  || (t2fa)>40||  (t3fa)>40 ) {
      document.getElementById("output").innerText = "Please enter marks below 100 or 100.";
      alert("தயவு செய்து FA மதிப்பெண் 40 க்குள் இருக்க வேண்டும்.");
      return;
     }
    if ((t1sa)>60 || (t2sa)>60||  (t3sa)>60) {
        document.getElementById("output").innerText = "Please enter marks below 100 or 100.";
        alert("தயவு செய்து SA மதிப்பெண் 60 க்குள் இருக்க வேண்டும்.");
        return;
    }

    const t1total = (t1fa + t1sa) ;
    const t2total = (t2fa + t2sa) ;
    const t3total = (t3fa + t3sa) ;
    const fatotal = (t1fa + t2fa + t3fa) ;
    const satotal = (t1sa + t2sa + t3sa) ;
    const totaltotal = (fatotal + satotal) ;
    const FAaverage = (t1fa + t2fa + t3fa) / 3;
    const SAaverage = (t1sa + t2sa + t3sa) / 3;
    const Totalaverage = (totaltotal) / 3;
    const RFAaverage = parseFloat(FAaverage.toFixed(0));
    const RSAaverage = parseFloat(SAaverage.toFixed(0));
    const RTotalaverage = parseFloat(Totalaverage.toFixed(0));
   
    
    //const average1 = parseFloat(average.toFixed(0));
    const t1Totalgrade = getTotalGrade(t1total);
    const t2Totalgrade = getTotalGrade(t2total);
    const t3Totalgrade = getTotalGrade(t3total);
    
    const FAaveragegrade = getFAGrade(RFAaverage);
    const SAaveragegrade = getSAGrade(RSAaverage);
    const Totalaveragegrade = getTotalGrade(RTotalaverage);
    //const grade1 = getGrade1(average1);
        

    document.getElementById("t1total").innerText = t1total;
    document.getElementById("t1grade").innerText = t1Totalgrade;
    document.getElementById("t2total").innerText = t2total;
    document.getElementById("t2grade").innerText = t2Totalgrade;
    document.getElementById("t3total").innerText = t3total;
    document.getElementById("t3grade").innerText = t3Totalgrade;
    document.getElementById("t3grade").innerText = t3Totalgrade;
    document.getElementById("totaltotal").innerText = totaltotal;
    document.getElementById("fatotal").innerText = fatotal;
    document.getElementById("satotal").innerText = satotal;
    document.getElementById("totalaverage").innerText = RTotalaverage;
    document.getElementById("faaverage").innerText = RFAaverage;
    document.getElementById("saaverage").innerText = RSAaverage;
    document.getElementById("totalaveragegrade").innerText = Totalaveragegrade;
    document.getElementById("faaveragegrade").innerText = FAaveragegrade;
    document.getElementById("saaveragegrade").innerText = SAaveragegrade;
   

    //  "Average Marks: " + average1 + " \n PRIMARY Avg Grade: " + grade+ " \n UPPER PRIMARY Avg Grade: " + grade1;
  
      }

  function getGrade(avg) {
    if (avg >= 80 && avg <= 100) return "A";
    else if (avg >= 60) return "B";
    else if (avg >= 40) return "C";
    else if (avg >= 20) return "D";
    else return "E";
  }
  
  function getTotalGrade(avg) {
    if (avg > 90 && avg <= 100) return "A1";
    else if (avg > 80) return "A2";
    else if (avg > 70) return "B1";
    else if (avg > 60) return "B2";
    else if (avg > 50) return "C1";
    else if (avg > 40) return "C2";
    else if (avg > 32) return "D" ;
    else if (avg > 20) return "E1" ;
    else return "E2";
  }

  function getSAGrade(avg) {
    if (avg > 54 && avg <= 100) return "A1";
    else if (avg > 48) return "A2";
    else if (avg > 42) return "B1";
    else if (avg > 36) return "B2";
    else if (avg > 30) return "C1";
    else if (avg > 24) return "C2";
    else if (avg > 18) return "D";
    else if (avg > 12) return "E1";
    else return "E2";
  }

  function getFAGrade(avg) {
    if (avg > 38 && avg <= 100) return "A1";
    else if (avg > 32) return "A2";
    else if (avg > 28) return "B1";
    else if (avg > 24) return "B2";
    else if (avg > 20) return "C1";
    else if (avg > 16) return "C2";
    else if (avg > 12) return "D";
    else if (avg > 8) return "E1";
    else return "E2";
  }

  function clearFields() {
    document.getElementById("t1fa").value = "";
    document.getElementById("t1sa").value = "";
    document.getElementById("t2fa").value = "";
    document.getElementById("t2sa").value = "";
    document.getElementById("t3fa").value = "";
    document.getElementById("t3sa").value = "";
    document.getElementById("output").innerText = "";
    document.getElementById("t1total").innerText = "";
    document.getElementById("t1grade").innerText = "";
    document.getElementById("t2total").innerText = "";
    document.getElementById("t2grade").innerText = "";
    document.getElementById("t3total").innerText = "";
    document.getElementById("t3grade").innerText = "";
    document.getElementById("fatotal").innerText = "";
    document.getElementById("satotal").innerText = "";
    document.getElementById("totaltotal").innerText = "";
    document.getElementById("faaverage").innerText = "";
    document.getElementById("saaverage").innerText = "";
    document.getElementById("totalaverage").innerText = "";
    document.getElementById("totalaveragegrade").innerText = "";
    document.getElementById("faaveragegrade").innerText = "";
    document.getElementById("saaveragegrade").innerText = "";
   
  }

  const scrollContainer = document.getElementById('scrollContainer');
const scrollRightBtn = document.getElementById('autoScrollRightBtn');
const stopScrollBtn = document.getElementById('stopScrollBtn');
let scrollInterval;
let isScrolling = false;

// Auto scroll to right function
function startAutoScrollRight() {
  if (isScrolling) return;
  
  isScrolling = true;
  
  scrollInterval = setInterval(() => {
    // Check if we've reached the end
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
      stopAutoScroll();
      return;
    }
    
    // Scroll right by 10px each interval
    scrollContainer.scrollBy({
      left: 10,
      behavior: 'auto' // Use 'smooth' for smoother but slower scrolling
    });
  }, 50); // Adjust timing for faster/slower scrolling
}
