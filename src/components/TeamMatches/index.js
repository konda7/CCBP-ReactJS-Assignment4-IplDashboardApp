import './index.css'

import {Component} from 'react'

import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {
    teamMatchDetails: [],
  }

  componentDidMount() {
    this.getTeamMatchData()
  }

  convertSnakeCaseToCamelCase = eachItem => ({
    umpires: eachItem.umpires,
    result: eachItem.result,
    manOfTheMatch: eachItem.man_of_the_match,
    id: eachItem.id,
    date: eachItem.date,
    venue: eachItem.venue,
    competingTeam: eachItem.competing_team,
    competingTeamLogo: eachItem.competing_team_logo,
    // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
    firstInnings: eachItem.first_innings,
    secondInnings: eachItem.second_innings,
    matchStatus: eachItem.match_status,
  })

  getTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id.slice(1)}`)
    const data = await response.json()
    const modifiedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.convertSnakeCaseToCamelCase(
        data.latest_match_details,
      ),
      recentMatches: data.recent_matches.map(eachItem =>
        this.convertSnakeCaseToCamelCase(eachItem),
      ),
    }
    // console.log(data)
    console.log(modifiedData)

    this.setState({
      teamMatchDetails: modifiedData,
    })
  }

  render() {
    const {teamMatchDetails} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatchDetails

    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id.slice(1).toLowerCase())

    return (
      <div className={`bg-container ${id.slice(1).toLowerCase()}`}>
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="whole-squad-img"
        />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
      </div>
    )
  }
}

export default TeamMatches
