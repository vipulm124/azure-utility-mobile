import {create} from 'zustand'
import axios from 'axios';


const BASE_URL = "http://127.0.0.1:8000/api"


const useAzureStore = create((set, get) => ({
    resource_groups : [],

    fetchItems: async() =>{
        try{
            const response = await axios.get(`${BASE_URL}/resource_group_data`)    
            const data = response.data;
            set({resource_groups:data})

        }
        catch(error){
            console.log('Failed to fetch resource group data:', error)
        }
    },

    removeItem: (resource_group_id) =>
        set((state) => ({
            resource_groups: state.resource_groups.filter((item)=> item.resource_group_id !== resource_group_id)
        })),






}));

export default useAzureStore;