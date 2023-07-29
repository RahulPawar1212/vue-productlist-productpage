
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
                <div class="tw-mt-3 tw-mb-3 tw-text-2xl">
                    <h1> {{data.modelName}}</h1>
                </div>
                <div class="tw-mt-3 tw-mb-3">
                    <h1> {{data.shortDescription}}</h1>
                </div>
            </v-col>
            
        </v-row>
        <v-row>
            <v-col cols="12" class="tw-text-center tw-text-2xl">
                Specications
            </v-col>
        </v-row>
        <v-row class="tw-border-2  tw-border-b-indigo-500" v-for="specs in data">
            <div class="tw-mb-2 tw-ml-2">
                {{ specs }}
            </div>
        </v-row>  
    </v-container>
    
</template>

<script setup lang="ts">
//import { ref } from 'vue'
//import { ISpecs } from '../specs';
import { useProductStore } from '../store/productstore';
//import { ISpecs } from '../specs';


const props = defineProps<{
    productid :string;
  }>()


const product = useProductStore();
await product.fetchitems()
const data = product.filterCollections[Number(props.productid) - 1] // Adjusting for zero-based indexing as 'filterCollections' returns iteration from array., 



</script>