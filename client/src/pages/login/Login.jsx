import './login.css'

export default function Login() {
  const handleSubmit = () => {

  }

  return (
    <div className='login'>
      <div className='unishareDescription'>
        <div className='descriptionContainer alignDescription'>
          <h1 className='introduction'>Welcome to Unishare</h1>
          <h2 className='text'>Simplifying Instructor-Student Communication</h2>
          <p className='descText'>Streamline your learning experience with our intuitive platform designed to connect instructors and students seamlessly</p>
        </div>
      </div>
      <div className='unishareLoginForm alignLoginForm'>
        <div className='loginContainer'>
          <h1 className='loginText'>Login to continue</h1>
          <form onSubmit={handleSubmit} className='loginForm'>
            <input type="text" placeholder='Enter your id'/>
            <input type="text" placeholder='Enter your Password'/>
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
