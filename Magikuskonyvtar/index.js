const links = document.querySelectorAll('.openscroll');
const allSpans = document.querySelectorAll('.fullscrolltext');
const scrollContainer = document.getElementById('fullscroll-container');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        scrollContainer.classList.add('is-visible');

        allSpans.forEach(span => {
            span.classList.remove('is-visible');
        });

        const targetId = link.getAttribute('data-target');
        const targetSpan = document.getElementById(targetId);
        
        if (targetSpan) {
            targetSpan.classList.add('is-visible');
        }
    });
});