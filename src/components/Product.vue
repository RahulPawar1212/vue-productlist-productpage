
<template>
  
    <v-container>
        <v-row >
            <v-col cols="5">
            <v-card-item>            
                <v-img
                    :src="data.src"
                    class="align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="400px"
                    cover
                    >
                </v-img>
            </v-card-item>
            </v-col>
            <v-col  cols="6" >
                <div class="tw-mt-3 tw-mb-3 text-h4">
                    <h1> {{data.modelName}}</h1>
                </div>
                <div class="tw-mt-3 tw-mb-3">
                    <h1> {{data.shortDescription}}</h1>
                </div>
                <div class="tw-mt-3 tw-mb-3">
                    <h1>Manufacturer : {{data.manufacturer}}</h1>
                </div>
                <div class="tw-mt-3 tw-mb-3">
                    <h1>Speciality : {{data.speciality}}</h1>
                </div>
            </v-col>
            
        </v-row>
        <v-row>
            <v-col cols="12" class="tw-text-center text-h4">
                Specification
            </v-col>
        </v-row>
        <v-row align="center"  no-gutters style="height: 40px" class=" tw-border-2  tw-border-b-indigo-500  hover:tw-bg-gray-200" 
        v-for="spec in specs">
        
            <v-col cols="3" class="tw-ml-1 tw-text-b" >
                {{ specNameList.next().value }} :                
            </v-col>
            
            <v-col> 
                {{ spec }}
            </v-col>
        </v-row>  
    </v-container>
    
</template>

<script setup lang="ts">
//import { ref } from 'vue'
//import { ISpecs } from '../specs';
import { useProductStore } from '../store/productstore';
//import { ISpecs } from '../specs';

//const i = 0
const props = defineProps<{
    productid :string;
  }>()


const product = useProductStore();
await product.fetchitems()
const data = product.filterCollections[Number(props.productid) - 1] // Adjusting for zero-based indexing as 'filterCollections' returns iteration from array., 

const { id,src,modelName,shortDescription, manufacturer,speciality, ...specs } = data; // Removed few variables and create new object with only specs data

//const entries = Object.entries(specs) as [keyof ISpecs, unknown][];

const _specNameList =    [
    "Dimensions and Weight",
    "Flight Time",
    "Price and Availability ",
    "Battery Type",
    "Max Flight Range",
    "Max Speed",
    "Camera Resolution",
    "Video Resolution",
    "Camera Stabilization",
    "Live Video Streaming",
    "Controller Type",
    "Smartphone App",
    "Obstacle Avoidance",
    "GPS Features",
    "Altitude Hold",
    "Flight Modes",
    "Storage Options",
    "Additional Features",
    "Safety Guidelines",
    ]


const specNameList: Iterator<string> = _specNameList[Symbol.iterator]();

</script>