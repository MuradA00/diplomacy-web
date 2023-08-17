const tabButtons = document.querySelectorAll('.tab-toggle'),
      tabContents = document.querySelectorAll('.tab-content')

tabContents[0].classList.add('tab-content--active');
tabButtons[0].classList.add('tab-toggle--active');

tabButtons.forEach(tabButton => {
  tabButton.addEventListener('click', () => {
    const tabId = tabButton.getAttribute('data-tab');

    tabContents.forEach(content => {
      if (content.id === tabId) {
        content.classList.add('tab-content--active');
      } else {
        content.classList.remove('tab-content--active');
      }
    });

    tabButtons.forEach(button => {
      if (button === tabButton) {
        button.classList.add('tab-toggle--active');
      } else {
        button.classList.remove('tab-toggle--active');
      }
    });
  });
});


if (Swiper) {
  const quotersSlider = new Swiper('.lessons-swiper', {
		slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  })
}
