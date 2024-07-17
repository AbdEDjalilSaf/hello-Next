import Card from "@/app/component/card"
import Link from "next/link"

const notification = () => {
  return (
    <Card>
      Notification
      <br />
      <Link href="/dashboard/archived">default</Link>
    </Card>
  )
}

export default notification
