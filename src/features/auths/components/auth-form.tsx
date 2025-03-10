
'use client'

import InputForm from "@/components/shared/input-form"
import SubmitBtn from "@/components/shared/submit-btn"
import { CardContent, CardFooter } from "@/components/ui/card"
import Form from 'next/form'
import AuthFooter from "./auth-footer"

interface AuthFormProps{
    type: 'signup | signin'
}

const AuthForm = ({type} : AuthFormProps) => {
 

  const renderinput = (
    label: string,
    id: string,
    type: string = 'text',
    required = false
    ) => (
        <div>
            <InputForm label={label} id={id} type={type} required={required}/>
        </div>
    )
  return (
    <Form action=''>
        <CardContent className="flex flex-col gap-2">
            {type === 'signup' && renderinput('ชื่อผู้ใช้', 'name')}
            {renderinput('อีเมล', 'email', 'email', true)}
            {renderinput('รหัสผ่าน', 'password', 'password', true)}
            {type === 'signup' && renderinput('ยืนยันรหัสผ่าน', 'confirmPassword', 'password', true)}
        </CardContent>
        <CardFooter className="pt-5 flex flex-col gap-2">
            <SubmitBtn name={type === 'signup' ? 'สมัครสมาชิก': 'เข้าสู่ระบบ'} className="w-full"/>
            <AuthFooter type={type}/>
        </CardFooter>
    </Form>
  )
}
export default AuthForm