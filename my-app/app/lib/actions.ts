"use server";
import axios from "axios";

export async function getAgents(token: string) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.retellai.com/list-agents',
        headers: { 
          'Authorization': `Bearer ${token}`
        }
    };

    try {
        const response = await axios.request(config);
        
        // console.log(JSON.stringify(response.data));
        return response.data;
      }
      catch (error) {
        console.log(error);
      }
}