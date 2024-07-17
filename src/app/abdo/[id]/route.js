import {comments} from "@/app/abdo/data"

export  async function POST(request){
    const comment = await request.json();
  
    const newComment = {
      id: comments.length + 1,
      text: comment.text,
    }
  
  
    getData.push(newComment);
  console.log(newComment);
    return new Response(JSON.stringify(newComment), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
  
    });
  
  }
  
  // ------------------------------------ Dynamic routes Handlers
  export async function GET({params}){
  
  const comment = comments.find((comment) => comment.id === parseInt(params.id));
  
  return Response.json(comment);
  
  }
  
  // ------------------------------------ Handling PATCH Request
  export async function PATCH({request}){
  
  const req = await request.json();
  const { text } = req;
  const index = comments.find((comment) => comment.id === parseInt(params.id));
  
  index.text = text;
  
  return Response.json(index);
  
  }
  