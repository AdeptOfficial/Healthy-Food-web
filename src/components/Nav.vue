<template>
  <nav class="fixed w-full z-10 top-0 bg-amber-300">
    <div class="relative bg-blue-700 py-2 banner transition-all duration-300 ease-in-out">
      <p class="font-bold text-white text-center text-sm">
        <span class="mr-2">Be apart of the community now!</span>
        <a
          class="underline pl-2 inline-flex"
          href="#"
        >
          Join Discord Server
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </p>
    </div>
    <div class="container max-w-7xl mx-auto sm:px-4 lg:px-8 py-4 flex items-center">
      <div class="flex-shrink-0">
        <a href="/">
          <img
            class="h-8"
            src="https://firebasestorage.googleapis.com/v0/b/exd-project-254c9.appspot.com/o/logo.png?alt=media&token=09cf5d05-0ec5-4df9-b438-0fa9201ea5be"
            alt="FreshChoice-logo"
          >
        </a>
      </div>
      <div class="flex space-x-4 lg:block lg:ml-8">
        <a href="/">
          Home
        </a>
        <!-- <a href="/about">
          About
        </a> -->
      </div>
    </div>
    <hr>
  </nav>
</template>
    
<script>
export default {
  name: "NavComponent",
  data() {
    return {
      hideBanner: 100,
      bannerHeight: 'block'
    }
  },
  created() {
    document.addEventListener('scroll', this.onScroll)
  },
  unmounted() {
    document.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      if (window.scrollY === 0) {
        this.bannerHeight = 'block';
        setTimeout(() => {
          if (window.scrollY === 0) {
            this.hideBanner = 100;
          }
        }, 50);
      } else {
        this.hideBanner = 0;
        setTimeout(() => {
          if (window.scrollY !== 0) {
            this.bannerHeight = 'none';
          }
        }, 300);
      }
    },
  },
}
</script>

<style>
@import '../dist/output.css';
.banner {
  opacity: v-bind(hideBanner);
  display: v-bind(bannerHeight);
}
</style>