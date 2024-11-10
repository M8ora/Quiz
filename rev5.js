
const items = [
    { definition: "52. Animation", term: "" },
];

let currentPage = 1;
const itemsPerPage = 5;


function renderItems() {
    const listContainer = document.getElementById('reviewer-list');
    listContainer.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = items.slice(start, end);

    currentItems.forEach(item => {
        const itemElement = document.createElement('div');
        const termElement = document.createElement('p');
        const seeMoreBtn = document.createElement('button');


        itemElement.innerHTML = `<h3>${item.definition}</h3>`;
        termElement.innerHTML = item.term;
        termElement.classList.add('line-clamp');

 
        seeMoreBtn.textContent = 'More';
        seeMoreBtn.classList.add('see-more-btn');

        seeMoreBtn.addEventListener('click', () => {
            if (termElement.classList.contains('line-clamp')) {
                termElement.classList.remove('line-clamp');
                seeMoreBtn.textContent = 'Less';
            } else {
                termElement.classList.add('line-clamp');
                seeMoreBtn.textContent = 'More';
            }
        });


        itemElement.appendChild(termElement);
        itemElement.appendChild(seeMoreBtn);
        listContainer.appendChild(itemElement);
    });
}


function goToNextPage() {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
        currentPage++;
        renderItems();
    }
}

function goToPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderItems();
    }
}


function toggleMenu() {
    const navOptions = document.querySelector('.nav-options');
    navOptions.classList.toggle('active');
}


document.getElementById('next-page').addEventListener('click', goToNextPage);
document.getElementById('prev-page').addEventListener('click', goToPrevPage);
document.getElementById('burger-menu').addEventListener('click', toggleMenu);

renderItems();