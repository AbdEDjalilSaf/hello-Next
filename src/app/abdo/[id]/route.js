import comments from "@/app/abdo/data"
import { redirect } from "next/dist/server/api-utils";

// export  async function POST(request){
//     const comment = await request.json();
  
//     const newComment = {
//       id: comments.length + 1,
//       text: comment.text,
//     }
  
  
//     getData.push(newComment);
//   console.log(newComment);
//     return new Response(JSON.stringify(newComment), {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       status: 201,
  
//     });
  
//   }
  
  // // ------------------------------------ Dynamic routes Handlers
  // export async function GET({params}){
  
  // const comment = comments.find((comment) => comment.id === parseInt(params.id));
  
  // return Response.json(comment);
  
  // }
  
  // ------------------------------------ Handling PATCH Request
//   export async function PATCH({request}){
//   const req = await request.json();
//   const { text } = req;
//   const index = comments.findIndex((comment) => comment.id === parseInt(params.id));
//   const here = comments[index];
//   here.text = text;
// if( here.status === 500){
//   console.log("Something broke");
// }
//   return Response.json(here);
  
//   }
  
//     // ------------------------------------ Handling Delete Request
// export async function DELETE({request}){

// const index = comments.find((comment) => comment.id === parseInt(params.id));

// comments.splice(index, 1);

// return Response.json(index);
// }


// ------------------------------------ Handling Delete Request
export async function GET({request}){
const searchParams = request.nextUrl.searchParams;
const quary = searchParams.get("quary");

 const filterComments = quary ? comments.filter((comment) => comment.text.includes(quary)) : comments;

 return Response.json(filterComments);

}

// ------------------------------------ Redirect outher routes
export async function GET(request,{params}){

  if(parseInt(params.id) > comments.lenght){
    redirect("/abdo");
  }

 const index = comments.find((comment) => comment.id === parseInt(params.id));

  return Response.json(filterComments);
}



