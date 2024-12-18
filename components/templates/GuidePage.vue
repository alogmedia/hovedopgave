<template>
    <div>
      <div class="top-logo">
        <Logo />
      </div>
      <Swiper
      :slides-per-view="1"
      :space-between="10"
      :breakpoints="breakpointsConfig"
      class="guide-swiper"
      @swiper="onSwiper"
      @slideChange="updateActiveSlide"
    >
        <SwiperSlide
          v-for="(guide, index) in guides"
          :key="index"
          class="product-slide"

        >
          <div class="guide-wrapper">
            <div class="guide">
                <div class="guide-content">
  <p class="guideTitle">{{ guide.title }}</p>
  <img :src="guide.image" :alt="guide.alt" />
  <p class="guideText" v-html="guide.text"></p>
  <div class="custom-pagination">
    <span
      v-for="(guide, index) in guides"
      :key="index"
      :class="['custom-bullet', { active: activeSlide === index }]"
      @click="goToSlide(index)"
    >
      <Icon v-if="activeSlide === index" name="ion:tennisball" class="tennisBullet" />
      <span v-else class="red-circle"></span>
    </span>
  </div>
  <NuxtLink to="/" class="backButton">
    <CallToAction label="Jeg forstår" class="backButton" />
  </NuxtLink>
</div>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
 
  </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/swiper-bundle.css";
  import hero1 from "@/assets/images/hero1.png";
  import hero2 from "@/assets/images/hero2.png";
  import hero3 from "@/assets/images/hero3.png";
  
const activeSlide = ref(0);

let swiperInstance = null;

const onSwiper = (swiper) => {
  swiperInstance = swiper;
};

const updateActiveSlide = (swiper) => {
  activeSlide.value = swiper.activeIndex;
};

const goToSlide = (index) => {
  if (swiperInstance) {
    swiperInstance.slideTo(index); 
  }
};

  const guides = [
    {
      title: "Padelpoint Guide",
      image: hero1,
      alt: "Guide Image 1",
      text: `
        <strong>Hvad er Padelpoint?</strong><br>
        Padelpoint er vores eksklusive belønningssystem, der giver dig mulighed for at få endnu mere ud af dine køb hos os.
        <br><br>
        <strong>Sådan fungerer det:</strong><br>
        <ul>
          <li>Optjen point hver gang du handler hos os.</li>
          <li>Brug dine Padelpoint til at købe produkter i Padelpoint butikken.</li>
        </ul>
      `,
    },
    {
      title: "Padelpoint Guide",
      image: hero2,
      alt: "Guide Image 2",
      text: `
        <strong>Sådan optjener du Padelpoint</strong><br><br>
At optjene Padelpoint er super nemt. Hver gang du handler hos os, får du en procentdel af dit køb i point, og de bliver pointene automatisk tilføjet til din konto.
<br><br>
Du kan holde øje med dine point under Padelpoint og bruge dem, når det passer dig. 
<br><br>
Der er ingen grænser for, hvor mange point du kan optjene – jo mere du handler, jo flere point får du!
      `,
    },
    {
      title: "Padelpoint Guide",
      image: hero3,
      alt: "Guide Image 3",
      text: `
    <strong>Sådan bruger du dine Padelpoint</strong><br><br>

Når du har optjent Padelpoint, kan du bruge dem til at købe produkter i vores Padelpoint-butik. 
<br><br>
<strong>Det er nemt og hurtigt:</strong><br><br>

<ul>
    <li>Gå ind i Padelpoint butikken.</li>
    <li>Vælg de produkter, du ønsker.</li>
    <li>Betal med dine point og optjen nye</li>
</ul><br>

Du finder både faste deals og tidsbegrænsede tilbud, så der er altid noget nyt at vælge imellem.
      `,
    },
  ];
  </script>
  
  <style lang="scss" scoped>
  .top-logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0; 
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
  }
  .guide-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  background: #fff;
  width: 90%;
  height: calc(100vh - 200px);
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden; 
}


.backButton {
  position: absolute;
  bottom: 0;
  left: 0; 
  right: 0; 
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}

.guideTitle {
    font-size: 3rem;
    font-family: $font-heading;
    font-weight: 100;
}

.guide {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 20px 0 20px 0;
  box-sizing: border-box;
}

.guide-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.guide-content img {
  width: 100%;
  max-height: 260px; 
  object-fit: con;
  object-fit: cover;
}

.guideText {
  flex-grow: 1; 
  overflow-y: auto;
  font-size: 0.800rem;
  text-align: left;
  font-weight: 100;
  margin: 0 20px;
  letter-spacing: 1px;
  font-family: $font-subheading;
}


.guideText {
    font-size: .800rem;
    text-align: left;
    font-weight: 100;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 20px;
    letter-spacing: 1px;
    font-family: $font-subheading;
    margin-top: 10px;
    width: 300px;
    ul {
        list-style-type: disc;
        margin-left: 20px;
        font-size: .775rem;
    }
    
}

.custom-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 45px;
}

.custom-bullet {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
}

.red-circle {
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: 1px solid #ff0000;
  border-radius: 50%;
}

.custom-bullet.active {
  width: 25px;
  height: 25px;
  color: #ff0000
}

.tennisBullet {
    color: #ff0000;
    font-size: 2rem;
    width: 25px;
    height: 25px;
}
  </style>
  