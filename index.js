const showPapers = 4;
let currentVisiblePapers = showPapers;

const papers = document.querySelectorAll("#papers-grid .paper");

const showMoreBtn = document.getElementById("show-more-btn");

const showLessBtn = document.getElementById("show-less-btn");

showMoreBtn.addEventListener("click", function() {
        const totalPapers = papers.length;
        const nextVisiblePapers = currentVisiblePapers + showPapers;

        for (let i = currentVisiblePapers; i < nextVisiblePapers && i < totalPapers; i++) {
            papers[i].style.display = 'block';
        }

        currentVisiblePapers = nextVisiblePapers;

        if (currentVisiblePapers >= totalPapers) {
            showMoreBtn.style.display = 'none';
            showLessBtn.style.display = 'block';
            
        }
    });

showLessBtn.addEventListener("click", function() {

    const visiblePapers = currentVisiblePapers - showPapers;

    for (let i = visiblePapers; i< currentVisiblePapers; i++) {
        papers[i].style.display = 'none';
    }

    currentVisiblePapers = visiblePapers;

    if (currentVisiblePapers < papers.length) {
        showMoreBtn.style.display = 'block';
    }

    if (currentVisiblePapers <= showPapers) {
        showLessBtn.style.display = 'none';
    }



});

function myFunc() { 
    let x = document.getElementById("myNav"); 
    console.log(x)
    if ( x.className === "navbar") { 
        x.className += " responsive"; 
    } else { 
        x.className = "navbar"; 
    } 
} 

