<template>


        <v-data-table
        :headers="headers"
        :items="filteredClients"
        item-key="id"
        class="elevation-2"
        :search="search"
        >
        <template v-slot:top>
                <v-text-field v-model="search" label="Search"></v-text-field>
        </template>
        
        <template v-slot:item.columns.modelName="{ item }">
          <router-link :to="'/product'">{{ item.columns.modelName}}</router-link>`
        </template>

        </v-data-table>


        <!-- <router-link :key="props.spec.id" :to="{name:'Product',params:{ productid:props.spec.id.toString()}}"> 
          <v-img
              :src="props.spec.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
          </v-img> -->

          <!-- <div class=" tw-grid tw-grid-cols-3 tw-gap-4  tw-border-y-2  tw-border-indigo-500/50   hover:tw-bg-gray-200 tw-divide-dotted">
          <div><h1 class="text-h8 tw-mb-3 tw-mt-3 ">{{props.spec.modelName}} </h1> </div>    
          <div><h1 class="tw-mt-3 tw-mb-1 tw-text-green-600"> {{props.spec.manufacturer}}</h1></div>
          <div><h1 class="tw-mt-3 tw-text-emerald-700"> {{props.spec.speciality}}</h1></div>
          </div>
        </router-link> -->
    
</template>

<script lang="ts" setup>
import {ref,computed} from 'vue';
import { ISpecs } from '../specs';
import { VDataTable } from "vuetify/labs/VDataTable";

const search = ref("");

const props = defineProps<{
 specs: ISpecs[];
  }>()


const filteredClients = computed(() => {

  const filtered = props.specs.filter((spec) =>
  spec.modelName.toLowerCase().includes(search.value.toLowerCase()),
    );

    return filtered
    
});

const headers = ref([
    { title: "id", key: "id" },
    { title: "Name", key: "modelName" },
    { title: "Description", key: "shortDescription"},
    { title: "Manufacturer", key: "manufacturer" }

]);

</script>
