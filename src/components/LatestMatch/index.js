import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    manOfTheMatch,
    secondInnings,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-details-container">
          <div>
            <p className="opponent-team-name">{competingTeam}</p>
            <p className="match-date">{date}</p>
            <p className="venue-and-result">{venue}</p>
            <p className="venue-and-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="opposition-team-logo"
            alt="opposition-team"
          />
        </div>
        <hr className="horizontal-line" />
        <div className="match-highlights-container">
          <p className="highlights">First Innings</p>
          <p className="result">{firstInnings}</p>
          <p className="highlights">Second Innings</p>
          <p className="highlights">{secondInnings}</p>
          <p className="highlights">Man of The Match</p>
          <p className="result">{manOfTheMatch}</p>
          <p className="highlights">Umpires</p>
          <p className="result">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
