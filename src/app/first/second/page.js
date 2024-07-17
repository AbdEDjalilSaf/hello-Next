import Link from "next/link"


export const metadata = {

  title :{
    absolute:"Next.js Second",
    default:"Next.js place",
    template:""
  },
  describtion:'generated'

} 


const page = () => {
  return (
    <div>
        <h2 className="text-5xl">Second Page<br/>
        <Link href="second/123" replace >Product</Link><br/>
        <Link href="/first" >first comeback</Link>
        </h2>
    </div>
  )
}

export default page
