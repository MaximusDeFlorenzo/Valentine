let noCount = 1;
title = document.querySelector('.Ask')
yesText = document.getElementById('yes')
noTest = document.getElementById('no')

document.getElementById('yes').addEventListener('click', function() {
    title.innerText = "Yeay!";
    document.getElementById('yes').style.fontSize = 18 + 'px';
    document.getElementById('yeay').style.display = 'none';
    document.getElementById('start').style.display = 'inline';
    document.getElementById('no').style.display = "none";
    document.getElementById('yes').style.display = "none";
});

document.getElementById('no').addEventListener('click', function() {
    document.getElementById('yes').style.fontSize = (20 * noCount) + 'px';
    if (noCount == 1) {
        title.innerText = "Why Not?";
        noTest.innerText = "Just No!";
    } else if (noCount == 2) {
        title.innerText = "I Can Give You Chocolate";
        noTest.innerText = "Not Interested";
    } else if (noCount == 3) {
        title.innerText = "Well, That's your choice";
        noTest.innerText = "Yeah, Leave me alone!";
    } else if (noCount == 4) {
        title.innerText = "But Are you sure?";
        noTest.innerText = "No!!!";
    } else {
        document.getElementById('yes').style.fontSize = 18 + 'px';
        document.getElementById('yeay').style.display = 'none';
        document.getElementById('no').style.display = 'none';
        document.getElementById('yes').style.display = 'none';
        title.innerText = "End Of The Page";
    }
    noCount++;
});