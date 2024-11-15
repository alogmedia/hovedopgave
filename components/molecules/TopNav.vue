<!-- components/molecules/TopNav.vue -->
<template>
<div class="animate-logo-top">
   <atomsLogo />
 <div class="topicons">
   <atomsTopNavIcon name="ic:twotone-favorite-border"/>
   <atomsTopNavIcon name="material-symbols:account-circle-outline" />
 </div>
</div>
</template>



<style scoped>

.topicons {
    display: flex;
    justify-content: space-between;
    gap: 11px;
    position: absolute;
    top: 5%;
    right: 51px;
}
</style>
