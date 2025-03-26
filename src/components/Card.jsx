import { useSelector } from "react-redux";

function Card() {
    const { name, login, followers, public_repos, avatar_url } = useSelector((state) => state.user);
    
    return (
        <div className='card'>
            <h2>{name}</h2>
            <p>Username: {login}</p>
            <p>Followers: {followers}</p>
            <p>Public Repos: {public_repos}</p>
            <img src={avatar_url} alt={name} width='150px' />
        </div>
    )
}

export default Card;