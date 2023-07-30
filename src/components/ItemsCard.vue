<template>
  <v-card
    class="mx-auto"
    max-width="344"
    variant="outlined"
  >
    <v-card-item>
      <div>
        
      
        <router-link :key="props.spec.id" :to="{name:'Product',params:{ productid:props.spec.id.toString()}}"> 
          <v-img
              :src="props.spec.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
          </v-img>

          <div class="text-h8 mb-3 tw-mt-3 ">
            <h1>{{props.spec.modelName}} </h1>
          </div>
          <div class="tw-mt-3 tw-mb-1 tw-text-green-600">
            <h1> {{props.spec.manufacturer}}</h1>
          </div>
          <div class="tw-mt-3 tw-text-emerald-700">
            <h1> {{props.spec.speciality}}</h1>
          </div>
        </router-link>
      </div>
      </v-card-item>
    
      <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
      
      <v-card-text>
    <h2>Drone Specifications:</h2>
    <ul>
        <li>Model Name:</li>
        <li>Manufacturer:</li>
        <li>Speciality:</li> 
        <li>Dimensions and Weight:</li>
        <li>Flight Time:</li>
        <li>Price and Availability:</li> 
        <li>Battery Type:</li>
        <li>Max Flight Range:</li>
        <li>Max Speed:</li>
        <li>Camera Resolution:</li>
        <li>Video Resolution:</li>
        <li>Camera Stabilization:</li>
        <li>Live Video Streaming:</li>
        <li>Controller Type:</li>
        <li>Smartphone App:</li>
        <li>Obstacle Avoidance:</li>
        <li>GPS Features:</li>
        <li>Altitude Hold:</li>
        <li>Flight Modes:</li>
        <li>Storage Options:</li>
        <li>Additional Features::</li>
        <li>Safety Guidelines::</li>
    </ul>

        </v-card-text>
      </div>
    </v-expand-transition>

    
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ISpecs } from '../specs';

const props = defineProps<{
 spec: ISpecs;
  }>()

const show = ref(false)


</script>
