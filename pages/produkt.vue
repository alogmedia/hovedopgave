<template>
  <div class="points">
    <SubHeader />
    <AnimationBanner />
    <ProductTitle />
    <ThreeProductViewer />
    <ProductForm title="1.500 kr" subtitle="2500" />
    <ProductDescription
      title="Beskrivelse"
      description="Ønsker du at dominere padelbanen og spiller du padle på et fornuftigt niveau? Så er dette padel bat det du mangler i tasken! Med dets diamantformet hoved, høje balancepunkt, mediumdensitets kerne og optimeret sweetspot leverer det masser af dominerende power på padelbanen! Hertil er den proppet med eksplosive materialer og teknologier!"
    />
    <BottomNav />
  </div>
</template>

<script setup>
import ThreeProductViewer from "@/components/templates/ThreeProductViewer.vue";
</script>
