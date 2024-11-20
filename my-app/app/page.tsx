import { redirect } from "next/navigation";

export default function Home() {
  redirect('/agents')
  return (
    <>
      This is the home page
    </>
  )
}
