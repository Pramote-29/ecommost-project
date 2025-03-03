import Link from "next/link"

interface AuthFooterProps{
    type: 'signup' | 'signin'
}

const authTextMap = {
    signup: {
        footerText: 'ถ้าคุณมีบัญชีอยู่แล้ว? ',
        linkText: 'เข้าสู่ระบบ',
        linkHref: '/auth/signin'
    },
    signin: {
        footerText: 'ถ้าคุณยังไม่มีบัญชี ',
        linkText: 'สมัครสมาชิก',
        linkHref: '/auth/signup'
    }
}

const AuthFooter = ({type}: AuthFooterProps) => {

  const { footerText, linkHref, linkText } = authTextMap[type]  
  return (
    <div>
        <p className="text-accent-foreground">
            {footerText}<Link href={linkHref} className="text-primary hover:underline">{linkText}</Link>
        </p>
    </div>
  )
}
export default AuthFooter