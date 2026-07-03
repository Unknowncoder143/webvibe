export default {

async fetch(request, env){

if(request.method==="OPTIONS"){

return new Response(null,{
headers:{
"Access-Control-Allow-Origin":"*",
"Access-Control-Allow-Headers":"Content-Type",
"Access-Control-Allow-Methods":"POST"
}
});

}

const body=await request.json();

const response=await fetch(
"https://openrouter.ai/api/v1/chat/completions",
{

method:"POST",

headers:{
Authorization:`Bearer ${env.OPENROUTER_API_KEY}`,
"Content-Type":"application/json"
},

body:JSON.stringify(body)

}
);

return new Response(
await response.text(),
{
headers:{
"Content-Type":"application/json",
"Access-Control-Allow-Origin":"*"
}
}
);

}

}
