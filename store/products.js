import { defineStore } from "pinia";


const state = () => ({
  products: [
    {
      "uuid": "5b9ed8b5-201e-4297-babb-29a566952e91",
      "name": "Camera model 1",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 950,
      "photoURL": "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      "uuid": "973b3d42-e039-428a-b2ad-e6444b5895f4",
      "name": "Camera model 2",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 950,
      "photoURL": "https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    },
    {
      "uuid": "33d3332e-42ac-4692-8523-ae76c3d8a773",
      "name": "Camera model 3",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 950,
      "photoURL": "https://images.pexels.com/photos/249597/pexels-photo-249597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      "uuid": "c70080cd-330f-4398-b169-03f057582e2a",
      "name": "Camera model 4",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 950,
      "photoURL": "https://images.pexels.com/photos/1091294/pexels-photo-1091294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ]
})

const getters = {
  getProducts: state => state.products,
}

const actions = {}

export const useProductStore = defineStore('productStore', {
  state,
  getters,
  actions
})