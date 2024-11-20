"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function getAgents(token: string) {
    const config = {
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

export async function getAgent({token, agent_id}: {token: string, agent_id: string}) {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.retellai.com/get-agent/${agent_id}`,
    headers: { 
      'Authorization': `Bearer ${token}`
    }
  };

  try {
    const response = await axios.request(config);
    return response.data;
  }
  catch (error) {
    console.log(error);
  }
}

export async function getVoices(token: string) {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.retellai.com/list-voices',
    headers: { 
      'Authorization': `Bearer ${token}`
    }
  };
  
  try {
    const response = await axios.request(config);
    const voicesByLanguage = response.data.reduce((acc:any, voice:any) => {
      // Group by accent
      if (!acc[voice.accent]) {
          acc[voice.accent] = [];
      }
      acc[voice.accent].push(voice);
      return acc;
  }, {});

    return voicesByLanguage
  }
  catch (error) {
    console.log(error);
  }
}

export async function updateAgentName({token, agent_id}:{token: string, agent_id: string}, agent_name: string) {
  
  const data = JSON.stringify({
    "agent_name": agent_name
  });
  
  let config = {
    method: 'patch',
    maxBodyLength: Infinity,
    url: `https://api.retellai.com/update-agent/${agent_id}`,
    headers: { 
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
    },
    data : data
  };

  try {
    const response = await axios.request(config);
    revalidatePath('/agents');
    revalidatePath(`/agents/${agent_id}`);
    return response.data;
  }
  catch (error) {
    console.log(error);
  }
}

export async function getPhoneNumbers(token: string) {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.retellai.com/list-phone-numbers',
    headers: { 
      'Authorization': `Bearer ${token}`
    }
  };

  try {
    const response = await axios.request(config);
    return response.data;
  }
  catch (error) {
    console.log(error);
  }
}

export async function createPhoneCall() {
  const data = JSON.stringify({
    "from_number": "from_number",
    "to_number": "to_number"
  });
  
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.retellai.com/v2/create-phone-call',
    headers: { 
      'Authorization': 'Bearer key_ec9abe916c45f1895268f3cae590', 
      'Content-Type': 'application/json'
    },
    data : data
  };
  try {
    const response = await axios.request(config);
    return response.data;
  }
  catch (error) {
    console.log(error);
  }  
}