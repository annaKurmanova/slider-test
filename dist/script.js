const slider=document.querySelector(".swiper-wrapper"),popupTitle=document.querySelector(".popup__title");fetch("https://private-anon-eec2fdbbae-grchhtml.apiary-mock.com/slides").then((e=>e.json())).then((e=>{e.data.map((e=>{slider.innerHTML+=`\n          <div class="swiper-slide slide" id=${e.id}>\n            <div class="slide__header">\n              <div class="slide__inner flex-item">\n                <h1>The Razorite </h1>\n                <img class="slide__logo" src="./src/assets/img/logo.svg" alt="">\n              </div>\n              <img class="slide__line" src="./src/assets/img/line.svg" alt="">\n              <div class="slide__info">${e.title} <br>supported by <br>Alpine Yokohama</div>\n          </div>\n            <img src="${e.imgUrl}"></img>\n        <div class="slide__footer flex-item">\n            <div class="slide__count flex-item">\n              <div class="slide__like">\n                  <img src="./src/assets/img/like-normal.svg" alt="">\n                </div>\n              <p>like: <span>${e.likeCnt} </span></p>\n            </div>\n               <div class="slide__social flex-item">\n            <img src="./src/assets/img/ok.svg" alt="">\n            <a href="http://vkontakte.ru/share.php?url=http://mysite.com" target="_blank"> <img\n                src="./src/assets/img/vk.svg" alt=""></a>\n            <a href="https://www.facebook.com/sharer/sharer.php?u=https://unclebigbay.hashnode.dev" target="_blank"\n              rel="noopener noreferrer">\n              <img src="./src/assets/img/fb.svg" alt="">\n            </a>\n          </div>\n          </div>\n        </div>\n       `}))})).then((e=>{Array.from(document.querySelectorAll(".slide__info")).forEach((e=>{e.addEventListener("click",openPopup)}))})).then((e=>{new Swiper(".swiperMain",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}));let popupBg=document.querySelector(".popup-bg"),closePopupBtn=document.getElementById("popup-btn");function openPopup(){popupBg.classList.add("active")}function closePopup(){popupBg.classList.remove("active")}popupBg.addEventListener("click",closePopup),closePopupBtn.addEventListener("click",closePopup);
//# sourceMappingURL=script.js.map