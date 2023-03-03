import './index.css'
import {Link} from 'react-router-dom'

const TeamCrad = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/ipl/:${id}`} className="team-link">
      <li className="team-card">
        <img
          src={teamImageUrl}
          alt="Example response"
          className="team-card-img"
        />
        <p className="team-card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCrad
