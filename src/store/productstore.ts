// productStore.js
import { defineStore } from 'pinia';
import { ISpecs } from '../specs';
import  productData  from '../productData.json';

//interface ISpecs extends Array<ISpecs> {}
interface ISpecsNew extends Array<ISpecs> {}


interface items {
  ids: string[] // ["1","2"]
    all: Map<string, ISpecs>
}


export const useProductStore = defineStore('product', {
  state: ():items  => ({
    ids: [],
    all: new Map()
  }),

  actions: {
    async fetchitems() {
      //const response = await fetch("../productData.json")
      //console.log(response)
      //let data = (await response.json()) as ISpecsNew;
      
      let data = productData as ISpecsNew;
      //console.log(data)

      let ids: string[] = []
      let all = new Map<string, ISpecs>()
      
      for (const client of data) {
        ids.push(client.id.toString())
        all.set(client.id.toString(), client)
     
    }
      this.ids = ids
      this.all = all      
    }

  },

  getters: {
    filterCollections: (state): ISpecs[] => {
        return state.ids
            .map(id => {
                const client = state.all.get(id)
                if (!client) {
                    throw Error(`Taks with id of ${id} was expected but not found.`)
                }
                return {
                    ...client
                }
            }) // mapping collection as per id
            .filter(client => {
                return client
            }) // Filter on map

    }
}
}
);
