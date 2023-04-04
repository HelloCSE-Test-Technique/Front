import { defineStore } from 'pinia'
import axios from "axios"

const URL = "http://127.0.0.1:8000/api/stars/"

export const useStarStore = defineStore("star", {
    state: () => ({
        stars: [],
    }),
    actions: {
        async fetchStars() {
            try {
                const data = await axios.get(URL)
                this.stars = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async fetchStar(id) {
            try {
                const data = await axios.get(URL + id)
                this.stars = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async createStar(lastName, firstName, image, description) {
            try {
                const data = await axios.post(URL, {
                    headers:{
                        'Access-Control-Allow-Origin': '*'
                    },
                    lastName: lastName,
                    firstName: firstName,
                    image: image,
                    description: description
                })
                this.stars = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    }
})