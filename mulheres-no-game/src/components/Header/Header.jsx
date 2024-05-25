import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
        <p>GameHer</p>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cadastro"><button>Cadastre-se</button></Link>
    </div>
  )
}
