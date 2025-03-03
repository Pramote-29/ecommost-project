import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
interface SubmitBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    name: string
    pennding? : boolean
}

const SubmitBtn = ({name, pennding = false, ...props}: SubmitBtnProps) => {
  return (
    <Button type='submit' disabled={pennding} {...props}>
        {pennding ? <Loader2 size={16} className='animate-spin'/> : name}
    </Button>
  )
}
export default SubmitBtn