<!--./src/components/NavBar.vue -->

<template>
<footer class="tw-bg-gray-800 tw-text-white tw-py-6">
  <div class="tw-container tw-mx-auto tw-flex tw-justify-center">
    <div class="tw-flex tw-space-x-4">
      <!-- Facebook Icon -->
      <a href="#" class="tw-text-white hover:tw-opacity-75">
        <svg class="tw-h-6 tw-w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 8h-3c-1.5 0-1.5.5-1.5 2v3h4l-1 4h-3v8H9v-8H6V15h3v-3c0-3 2-5 5-5h3v4z"></path>
        </svg>
      </a>

      <!-- Twitter Icon -->
      <a href="#" class="tw-text-white hover:tw-opacity-75">
        <svg class="tw-h-6 tw-w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22.46 5.16c-.8.35-1.66.58-2.55.69a4.72 4.72 0 0 0 2.07-2.61 9.5 9.5 0 0 1-3 .91 4.76 4.76 0 0 0-8.14 4.34A13.47 13.47 0 0 1 3.19 3.33a4.77 4.77 0 0 0 1.47 6.37A4.72 4.72 0 0 1 2.9 8.55v.06a4.76 4.76 0 0 0 3.8 4.67c-.8.22-1.62.03-2.34-.55v.07a4.77 4.77 0 0 0 3.82 4.68c-1.32.37-2.68.22-3.89-.41-.04 1.25.37 2.45 1.15 3.36a4.76 4.76 0 0 0 4.17 1.2c6.16 0 9.54-5.14 9.54-9.54 0-.15 0-.29-.01-.44a6.9 6.9 0 0 0 1.65-1.79c-.57.25-1.18.41-1.81.49a2.41 2.41 0 0 0 1.06-1.33z"></path>
        </svg>
      </a>

      <!-- LinkedIn Icon -->
      <a href="#" class="tw-text-white hover:tw-opacity-75">
        <svg class="tw-h-6 tw-w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21v-6.004C20 13.896 19.104 13 18.004 13H5.996C4.896 13 4 13.896 4 14.996v6.008A2.006 2.006 0 0 0 5.996 23H18.01A2.007 2.007 0 0 0 20 21zM7 7h3v8H7zM6 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 11v-4c0-1.15-.37-2-1.75-2S14.5 12 14 12c-.5 0-1 .25-1.25.75V12H10v8h3v-4c0-1.23.5-2 1.75-2s1.75.77 1.75 2v4h3z"></path>
        </svg>
      </a>

      <!-- Instagram Icon -->
      <a href="#" class="tw-text-white hover:tw-opacity-75">
        <svg class="tw-h-6 tw-w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3.64a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V7.64a4 4 0 0 1 4-4h8zm4 9.36v4m0 0h-4m4 0a4 4 0 0 0 0-8V3.64a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
        </svg>
      </a>
    </div>
  </div>
  <div class="tw-container tw-mx-auto tw-mt-4 tw-text-center">
    <p class="tw-text-gray-400 tw-text-sm">123 Example Street, Cityville, Country</p>
    <p class="tw-text-gray-400 tw-text-sm">Email: contact@example.com | Phone: +1 (123) 456-7890</p>
    <p class="tw-text-gray-400 tw-text-sm">© 2023 Your Website. All rights reserved.</p>
  </div>
</footer>



</template>
  
  <script lang="ts">
  export default {
    name: "Footers",
  };
  </script>