export function useGsap() {
  return useNuxtApp().$gsap;
}

export function useGsapScrollTrigger() {
  return useNuxtApp().$ScrollTrigger;
}
