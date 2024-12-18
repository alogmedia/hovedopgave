<template>
    <div>
      <SubHeader />

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
            <div class="guide">
                <div class="guide-content">
  <p class="guideTitle">{{ guide.title }}</p>
  <p class="guideSubtitle">{{ guide.subtitle }}</p>
  <img :src="guide.image" :alt="guide.alt" />
  <p class="guideText" v-html="guide.text"></p>
  <div class="pagination-wrapper">
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
  <NuxtLink to="/points" class="backButton">
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
      title: "Padelpoints",
      subtitle: "Guide",
      image: hero1,
      alt: "Guide Image 1",
      text: `
        <strong>Hvad er Padelpoint?</strong><br><br>
        Padelpoint er vores eksklusive belønningssystem, der giver dig mulighed for at få endnu mere ud af dine køb hos os.
        <br><br>
        <strong>Sådan fungerer det:</strong><br>
        <ul style="padding: 10px 0 0 10px; width: 100%;">
          <li>Optjen point hver gang du handler hos os.</li>
          <li style="padding-top: 5px;">Brug dine Padelpoint til at købe produkter i Padelpoint butikken.</li>
        </ul>
      `,
    },
    {
      title: "Padelpoints",
      subtitle: "Guide",
      image: hero2,
      alt: "Guide Image 2",
      text: `
        <strong>Sådan optjener du Padelpoint</strong><br><br>
<p style="width: 100%;">At optjene Padelpoint er super nemt. Hver gang du handler hos os, får du en procentdel af dit køb i point, og de bliver pointene automatisk tilføjet til din konto.
<br><br>
Du kan holde øje med dine point under Padelpoint og bruge dem, når det passer dig. 
<br><br>
Der er ingen grænser for, hvor mange point du kan optjene – jo mere du handler, jo flere point får du!</p>
      `,
    },
    {
      title: "Padelpoints",
      subtitle: "Guide",
      image: hero3,
      alt: "Guide Image 3",
      text: `
    <strong>Sådan bruger du dine Padelpoint</strong><br><br>

Når du har optjent Padelpoint, kan du bruge dem til at købe produkter i vores Padelpoint-butik. 
<br><br>
<strong>Det er nemt og hurtigt:</strong><br>

<ul style="padding: 12px 0 0 10px; width: 100%;">
    <li>Gå ind i Padelpoint butikken.</li>
    <li style="padding-top: 5px;">Vælg de produkter, du ønsker.</li>
    <li style="padding-top: 5px;">Betal med dine point og optjen nye</li>
</ul><br>

Du finder både faste deals og tidsbegrænsede tilbud, så der er altid noget nyt at vælge imellem.
      `,
    },
  ];
  </script>
  
  <style lang="scss" scoped>



.guideTitle {
    font-size: 3rem;
    font-family: $font-heading;
    font-weight: 100;
}
.guideSubtitle {
  font-size: 2rem;
  font-family: $font-heading;
  font-weight: 100;
  padding-bottom: 20px;
}

.guide {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 40px;
}

.guide-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.guide-content img {
  width: 90%;
  margin: 0 auto;
  max-height: 275px; 
  object-fit: cover;
}

.guideText {
  flex-grow: 1; 
  font-size: 0.800rem;
  text-align: left;
  font-weight: 100;
  margin: 0 20px;
  letter-spacing: 1px;
  font-family: $font-subheading;
  padding: 20px;
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
    height: 250px;

}

    
.pagination-wrapper {
  display:flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;

  a {
    text-decoration: none;
  }


}

.custom-pagination {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.backButton {
  display:flex;
  justify-content: center;
  width: 100%;
  :deep(.button) {
    width: 90%;
  }
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


@media only screen and (max-width: 390px) {
  .guide-content img {
    height: 200px;
  }
  .guideText {
    height: 240px;
  }
}
  </style>
  