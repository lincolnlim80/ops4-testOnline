function checkPreviousInfo(projectcategory) {
    var hasEnteredInfo = localStorage.getItem("hasEnteredMPAInfo");
    if (hasEnteredInfo==="true") {
      // User has previously entered information, go straight to site
        if (projectcategory === 'pastprojects') { 
        window.location.href = "./pastprojects.html";
        } else if  (projectcategory === 'pastprojects-ec') { 
          window.location.href = "./pastprojects-ec.html";
        } else if  (projectcategory === 'pastprojects-stratalanded') { 
          window.location.href = "./pastprojects-stratalanded.html";
        } else if  (projectcategory === 'pastprojects-landed') { 
          window.location.href = "./pastprojects-landed.html";
        } else if  (projectcategory === 'pastprojects-enbloc') { 
          window.location.href = "./pastprojects-enbloc.html";
        } else if  (projectcategory === 'currentprojects') { 
        window.location.href = "./currentprojects.html";
        } else if (projectcategory === 'upcomingprojects') { 
        window.location.href = "./upcomingprojects.html";
        }

    } else {showForm();
    }
  }


function showForm() {
    document.getElementById("popupForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }


