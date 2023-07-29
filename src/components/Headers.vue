<!--./src/components/NavBar.vue -->

<template>
<nav class="tw-bg-blue-500 sticky-header tw-p-4"> <!-- //sticky-header custom css added here because tailwind css not working properly -->
  <div class="tw-container tw-mx-auto">
    <div class="tw-flex tw-items-center tw-justify-between">
      <div class="tw-text-white tw-font-bold tw-text-xl">
        <v-icon icon="$vuetify"></v-icon>
      </div>
      <ul class="tw-flex tw-space-x-9">
        <li>
          <a href="#" class="tw-text-white hover:tw-text-emerald-200">
            Home
          </a>
        </li>
        <li>
          <a href="#" class="tw-text-white hover:tw-text-emerald-200">
            About
          </a>
        </li>
        <li>
          <a href="#" class="tw-text-white hover:tw-text-emerald-200">
            Services
          </a>
        </li>
        <li>
          <a href="#" class="tw-text-white hover:tw-text-emerald-200">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </template>
  
  <script lang="ts">
  export default {
    name: "NavBar",
  };
  </script>

  <style>
  /* styles.css or your-component.vue */
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 10; /* Set a higher z-index value here */
  /* Add other styles for your sticky header */
}
  </style>