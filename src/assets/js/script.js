const slider = document.querySelector(".swiper-wrapper");
const popupTitle = document.querySelector(".popup__title");

fetch("https://private-anon-eec2fdbbae-grchhtml.apiary-mock.com/slides")
  .then((response) => response.json())
  .then((info) => {
    info.data.map((values) => {
      slider.innerHTML += `
          <div class="swiper-slide slide" id=${values.id}>
            <div class="slide__header">
              <div class="slide__inner flex-item">
                <h1>The Razorite </h1>
                <img class="slide__logo" src="./src/assets/img/logo.svg" alt="">
              </div>
              <img class="slide__line" src="./src/assets/img/line.svg" alt="">
              <div class="slide__info">${values.title} <br>supported by <br>Alpine Yokohama</div>
          </div>
            <img src="${values.imgUrl}"></img>
        <div class="slide__footer flex-item">
            <div class="slide__count flex-item">
              <div class="slide__like">
                  <img src="./src/assets/img/like-normal.svg" alt="">
                </div>
              <p>like: <span>${values.likeCnt} </span></p>
            </div>
               <div class="slide__social flex-item">
            <img src="./src/assets/img/ok.svg" alt="">
            <a href="http://vkontakte.ru/share.php?url=http://mysite.com" target="_blank"> <img
                src="./src/assets/img/vk.svg" alt=""></a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://unclebigbay.hashnode.dev" target="_blank"
              rel="noopener noreferrer">
              <img src="./src/assets/img/fb.svg" alt="">
            </a>
          </div>
          </div>
        </div>
       `;
    });
  })
  .then((slideTitles) => {
    slideTitles = Array.from(document.querySelectorAll(".slide__info"));
    slideTitles.forEach((slideTitle) => {
      slideTitle.addEventListener("click", openPopup);
    });
  })
  .then((swiper) => {
    swiper = new Swiper(".swiperMain", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

// popup
let popupBg = document.querySelector(".popup-bg");
let closePopupBtn = document.getElementById("popup-btn");

popupBg.addEventListener("click", closePopup);
closePopupBtn.addEventListener("click", closePopup);

function openPopup() {
  popupBg.classList.add("active");
}

function closePopup() {
  popupBg.classList.remove("active");
}
