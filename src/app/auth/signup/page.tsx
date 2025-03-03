import AuthForm from "@/features/auths/components/auth-form"
import AuthHeader from "@/features/auths/components/auth-header"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Register',
    description: 'ร้านค้าออนไลน์สำหรับข้าวคุณภาพ ราคาดีเข้าถึงได้'
}

const SigupPage = () => {
  const type = 'signup'  

  return (
    <AuthHeader type={type}>
        <AuthForm type={type}/>
    </AuthHeader>
  )
}
export default SigupPage