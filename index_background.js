function checkPreviousInfo(projectcategory) {
    var hasEnteredInfo = localStorage.getItem("hasEnteredMPAInfo");
    if (hasEnteredInfo==="true") {
      // User has previously entered information, go straight to site
        if (projectcategory === 'pastprojects') { 
        window.location.href = "./pastprojects.html";
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


