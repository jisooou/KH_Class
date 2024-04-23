document.addEventListener('DOMContentLoaded', () => {

  //이미지 변환
  const gridImages = document.querySelectorAll('.grid__img1');
  const gridImages2 = document.querySelectorAll('.grid__img2');
  const gridImages3 = document.querySelectorAll('.grid__img3');
  const gridImages4 = document.querySelectorAll('.grid__img4');
  const gridImages5 = document.querySelectorAll('.header'); //범죄도시4
  const gridImages6 = document.querySelectorAll('.grid__img5'); //가필드 더 무비


  //1.
  const imageUrls = [
      'https://img2.quasarzone.com/editor/2022/08/14/e7e2566b579e33daf30f3da302037f18.jpg',
      'https://i.namu.wiki/i/U7PcTp7NhLv5n-8mbHtx2PRHZuYAluswY2BxboOSsIlGDEHsgklE42EdY77j8GqKtrhDZbnF-RFKQF8m1b3LEQ.webp',
      'https://i.namu.wiki/i/IJ623libGUdRYLmOZRgRZpXAznKKO0Qh2VfdDxFK92Foav-s5yi3W8fEv9r4I9kwWiYu2RsI5S_46dVjZ-nalw.webp'
  ];
  //2.
  const imageUrls2 = [
      'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi2.ruliweb.com%2Fimg%2F24%2F04%2F05%2F18ea9e09fb04514a9.jpg&type=sc960_832',
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAzMjdfMTUy%2FMDAxNzExNTE1MzAwNzQx.DmVLHVg_zWVQpeaUa7pdHcH87_qo9K4Gf7nzyPfhW-8g.GnRQhBFbFm6EOea_Tul1G2yYHK5fNrDHJkj8FL6ofwEg.JPEG%2F%25C3%25A7%25B8%25B0%25C0%25FA%25BD%25BA16.jpg&type=sc960_832',
      'https://entertainimg.kbsmedia.co.kr/cms/uploads/BBSIMAGE_20240416083345_37e2f033844400c1642b5a00359f1f26.jpg'
  ];
  //3.
  const imageUrls3 = [
      'https://i.namu.wiki/i/oyCAXodUH2u3mt1pQ6o_5jh618kMvZzr18enB37xcwnhFJCOxLwIrygN5R4BuVAKQ8H1x3T1yD4w_kZUkM32rQ.webp',
      'https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88077/88077224316_727.jpg',
      'https://i.namu.wiki/i/RpS-cupOWoveZz1go_1Uxpi0WujrBa8MqMT1mCq0AgQynBTkaSofaiqfMhB3PShrr7331z1Yl_UXx4GciDCiCQ.webp'
  ];
  //4.
  const imageUrls4 = [
      'https://i.namu.wiki/i/jdip4HndgaEMPhadpUb-439G5W_q0Br7dTCF8AYBiEvvuzkHrtLTp54Rj0zWExZNUfCxSpFiL11iLHURvXAAtQ.webp',
      'https://cdn.jjan.kr/data2/content/image/2011/08/25/.cache/512/20110825102925.jpg'
  ];
  //5. - 범죄도시4
  const imageUrls5 = [
      'https://i.ytimg.com/vi/OqfiM8zEzQA/maxresdefault.jpg',
      'https://flexible.img.hani.co.kr/flexible/normal/640/427/imgdb/original/2024/0416/20240416501721.jpg'
  ];
  //6. - 가필드 더 무비
  const imageUrls6 = [
      'https://i.namu.wiki/i/dflxlCTVgXZ8iMRe4u-fpDWUzWSRonFfDHwDnjbQetZnJlTTp4_t7hSggzahhoSsrfNe6Q3obYlOZOLmI3vASQ.webp',
      'https://i.namu.wiki/i/VGUYAIZKjlUANm_9JglGtUq7fAPq3esVpztEpvwnE7O9n6v45gkqU7phost2NlHCOQw2zgdgXRFYxogu2tOH3w.webp'
  ];


  //1.
  gridImages.forEach(img => {
      let originalImage = img.style.backgroundImage; 

      img.addEventListener('mouseenter', () => {
          const randomIndex = Math.floor(Math.random() * imageUrls.length);
          img.style.backgroundImage = `url("${imageUrls[randomIndex]}")`;
      });

      img.addEventListener('mouseleave', () => {
          img.style.backgroundImage = originalImage;
      });
  });
  //2.
  gridImages2.forEach(img => {
      let originalImage2 = img.style.backgroundImage; 

      img.addEventListener('mouseenter', () => {
          const randomIndex2 = Math.floor(Math.random() * imageUrls2.length);
          img.style.backgroundImage = `url("${imageUrls2[randomIndex2]}")`;
      });

      img.addEventListener('mouseleave', () => {
          img.style.backgroundImage = originalImage2;
      });
  });
  //3.
  gridImages3.forEach(img => {
      let originalImage3 = img.style.backgroundImage; 

      img.addEventListener('mouseenter', () => {
          const randomIndex3 = Math.floor(Math.random() * imageUrls3.length);
          img.style.backgroundImage = `url("${imageUrls3[randomIndex3]}")`;
      });

      img.addEventListener('mouseleave', () => {
          img.style.backgroundImage = originalImage3;
      });
  });
  //4.
  gridImages4.forEach(img => {
      let originalImage4 = img.style.backgroundImage; 

      img.addEventListener('mouseenter', () => {
          const randomIndex4 = Math.floor(Math.random() * imageUrls4.length);
          img.style.backgroundImage = `url("${imageUrls4[randomIndex4]}")`;
      });

      img.addEventListener('mouseleave', () => {
          img.style.backgroundImage = originalImage4;
      });
  });
  //5. - 범죄도시4
  gridImages5.forEach(img => {
      let originalImage5 = img.style.backgroundImage; 

      img.addEventListener('mouseenter', () => {
          const randomIndex5 = Math.floor(Math.random() * imageUrls5.length);
          img.style.backgroundImage = `url("${imageUrls5[randomIndex5]}")`;
      });

      img.addEventListener('mouseleave', () => {
          img.style.backgroundImage = originalImage5;
      });
  });
  //6. - 가필드 더 무비
  gridImages6.forEach(img => {
      let originalImage6 = img.style.backgroundImage; 

      img.addEventListener('mouseenter', () => {
          const randomIndex6 = Math.floor(Math.random() * imageUrls6.length);
          img.style.backgroundImage = `url("${imageUrls6[randomIndex6]}")`;
      });

      img.addEventListener('mouseleave', () => {
          img.style.backgroundImage = originalImage6;
      });
  });

  



  //예고편 재생
  const trailerButton = document.querySelector('.blog-button');
  const trailerIframe = document.getElementById('trailer');

  const trailers = [
      'https://www.youtube.com/embed/6kjApj4YXgY?si=Q-W2vEvtt1EloYiF',
      'https://www.youtube.com/embed/LU7ujHmsc-s?si=xAZQqsUXHetQR5BA',
      'https://www.youtube.com/embed/b0yAOYIvP1Y?si=4hCYor6i-cTelwAk',
      'https://www.youtube.com/embed/ueuGApU6yoA?si=YIfrtx2XgaX1mE6E',
      'https://www.youtube.com/embed/AJYQDfuF-bs?si=3yvN_Hg2kzGiKE0I'
  ];

  let currentTrailerIndex = 0;  

  trailerButton.addEventListener('click', () => {
      currentTrailerIndex = (currentTrailerIndex + 1) % trailers.length;

      trailerIframe.src = trailers[currentTrailerIndex];
  });





  //좋아요 이모티콘
  let count = 0;

  const value = document.querySelector("#value");
  const btns = document.querySelectorAll(".goodImage");
  
  btns.forEach(function (btn) {
      btn.addEventListener("click", () => {
          count++;
      
          if (count > 0) {
              value.style.color = "pink";
          }
          if (count === 0) {
              value.style.color = "#222";
          }
          value.textContent = count;
      });
  });
  
  
});