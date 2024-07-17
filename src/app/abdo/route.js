import { comment } from "postcss";
import {comments} from "@/app/abdo/data"

// export async function GET(){
//   return new Response("welcome for every one");
// }

// export  async function POST(request){
//   const comment = await request.json();

//   const newComment = {
//     id: comments.length + 1,
//     text: comment.text,
//   }


//   getData.push(newComment);
// console.log(newComment);
//   return new Response(JSON.stringify(newComment), {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     status: 201,

//   });

// }

// ------------------------------------ Dynamic routes Handlers
export async function GET({params}){

const comment = comments.find((comment) => comment.id === parseInt(params.id));

return Response.json(comment);

}

// ------------------------------------ Handling PATCH Request
// export async function PATCH({request}){

// const req = await request.json();
// const { text } = req;
// const index = comments.find((comment) => comment.id === parseInt(params.id));

// index.text = text;

// return Response.json(index);

// }



// // utils/axios.js
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://api.example.com', // يمكنك تغيير الـ baseURL حسب احتياجاتك
// });

// // يمكنك إضافة interceptors إذا لزم الأمر
// instance.interceptors.request.use(
//   config => {
//     // قم بتعديل الإعدادات قبل إرسال الطلب
//     return config;
//   },
//   error => {
//     // التعامل مع أخطاء الطلب
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   response => {
//     // التعامل مع الردود الناجحة
//     return response;
//   },
//   error => {
//     // التعامل مع أخطاء الرد
//     return Promise.reject(error);
//   }
// );

// export default instance;











// pages/index.js
// import axios from '../utils/axios';
// import { useEffect, useState } from 'react';

// const HomePage = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/endpoint'); // استخدم الـ endpoint المناسب
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!data) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>Data from API</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default HomePage;

