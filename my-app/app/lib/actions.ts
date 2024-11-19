"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";

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

export async function getAgent({token, agent_id}: {token: string, agent_id: string}) {
  let config = {
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
  let config = {
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

export async function updateAgentName(formData: FormData) {
  const token = formData.get('token');
  const agent_id = formData.get('agent_id');
  const agent_name = formData.get('agent_name');
  
  let data = JSON.stringify({
    "agent_name": agent_name
  });
  
  let config = {
    method: 'patch',
    maxBodyLength: Infinity,
    url: 'https://api.retellai.com/update-agent/agent_1dea0bb6b31a63db231730c55c',
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
  let config = {
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
  let data = JSON.stringify({
    "from_number": "from_number",
    "to_number": "to_number"
  });
  
  let config = {
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