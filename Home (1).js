// Fetch live news from MarketAux
async function fetchNews() {
    const apiKey = '1paWAAzU0JxJhE93wtMdrtccnrEeFi4VGUCojPF3'; // Your MarketAux API key
    const url = `https://api.marketaux.com/v1/news/all?api_token=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.data && data.data.length > 0) {
            const newsSlides = document.getElementById('newsSlides');
            newsSlides.innerHTML = ''; // Clear existing slides

            data.data.forEach(article => {
                const slide = document.createElement('div');
                slide.classList.add('news-slide');
                slide.innerHTML = `
                    <h4>${article.title}</h4>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;
                newsSlides.appendChild(slide);
            });

            // Show the first slide initially
            const slides = document.querySelectorAll('.news-slide');
            slides[0].style.display = 'block';

            // Auto-slide news every 5 seconds
            let slideIndex = 0;
            setInterval(() => {
                slides[slideIndex].style.display = 'none'; // Hide current slide
                slideIndex = (slideIndex + 1) % slides.length; // Move to the next slide
                slides[slideIndex].style.display = 'block'; // Show next slide
            }, 5000);
        } else {
            // Display a message if no articles are available
            const newsSlides = document.getElementById('newsSlides');
            newsSlides.innerHTML = '<p>No news articles available at this time.</p>';
        }
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

// Call fetchNews on page load
window.onload = fetchNews;
