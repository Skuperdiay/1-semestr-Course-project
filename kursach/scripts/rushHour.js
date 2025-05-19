async function loadComments() {
    const response = await fetch('jsons/rushHourMessages.json');
    const reviews = await response.json();
    displayUsers(reviews);
}

function displayUsers(reviews) {
    const userList = document.getElementById('reviews');
    userList.innerHTML = ''; 
    
    reviews.forEach(review => {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        h3.classList.add('reviewNickname');
        h4.classList.add('reviewDate');
        p.classList.add('reviewComment');
        h3.textContent = review.nickname;
        h4.textContent = "оставлен " + review.date;
        p.textContent = review.comment;
        li.appendChild(h3);
        li.appendChild(h4);
        li.appendChild(p);
        userList.appendChild(li);
    });
}

window.addEventListener('DOMContentLoaded', loadComments);