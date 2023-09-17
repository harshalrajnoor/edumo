import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Edumo</h1>
          <p>edumo is a web application that empowers users to showcase their academic and technical accomplishments.</p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
          
        </div>
        <div className="right">
          <h1>Register</h1>
          <form >
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register