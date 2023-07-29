
<template>
    {{ props.productid }}
    <Suspense>
        <Product :productid=props.productid></Product> 
    </Suspense>
</template>



<script setup lang="ts">
//import { ref } from 'vue'
import Product  from '../components/Product.vue' 
//import { ISpecs } from '../specs';


const props = defineProps<{
productid:string
  }>()

</script>