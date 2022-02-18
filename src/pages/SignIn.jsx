import {useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {

  const [showPassword, setShowPassword] = useState(true)
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const {email, password} = formData
  const navigate = useNavigate()



    return (
      <div>
  
          <h1>SignIn Page</h1>
      </div>
    )
  }
  
  export default SignIn